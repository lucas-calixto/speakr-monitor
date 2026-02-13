import 'dotenv/config'
import mysql from 'mysql2/promise'

/**
 * Script de sincronismo banco FreePBX para app de extrato de chamadas
 *
 * Converte dados do CDR do FreePBX para o banco de dados Speakr
 *
 * @author Lucas Calixto <lucas-calixtooo@hotmail.com.br>
 * @converted Wesley Leandro - PHP to TypeScript
 */

interface FreePBXRecord {
  date: Date
  src: string
  dst: string
  billsec: number
  status: string
  linkedid: string
  recordingfile: string
  cnum: string
}

export async function syncFreePBXDatabase(): Promise<void> {
  let connectionFreePBX: mysql.Connection | null = null
  let connectionSpeakr: mysql.Connection | null = null

  try {
    // Inicia conexão com banco de dados FreePBX
    connectionFreePBX = await mysql.createConnection({
      host: process.env.FREEPBX_DB_HOST,
      database: process.env.FREEPBX_DB_NAME,
      user: process.env.FREEPBX_DB_USER,
      password: process.env.FREEPBX_DB_PASSWORD,
    })

    // Inicia conexão com banco de dados APP Speakr
    connectionSpeakr = await mysql.createConnection({
      host: process.env.SPEAKR_DB_HOST,
      database: process.env.SPEAKR_DB_NAME,
      user: process.env.SPEAKR_DB_USER,
      password: process.env.SPEAKR_DB_PASSWORD,
    })

    // Inicia transações
    await connectionFreePBX.beginTransaction()
    await connectionSpeakr.beginTransaction()

    // Seleciona registros no FreePBX
    const [rows] = await connectionFreePBX.query<mysql.RowDataPacket[]>(
      `SELECT 
        calldate AS 'date',
        src,
        dst,
        billsec,
        disposition AS 'status',
        linkedid,
        recordingfile,
        cnum 
      FROM cdr 
      WHERE sync IS NULL`
    )

    const dados = rows as FreePBXRecord[]

    // Insere no banco de sistema Speakr
    const insertQuery = `
      INSERT INTO cdrs 
      (date, src, dst, billsec, status, linkedid, recordingfile, cnum) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `

    for (const record of dados) {
      await connectionSpeakr.execute(insertQuery, [
        record.date,
        record.src,
        record.dst,
        record.billsec,
        record.status,
        record.linkedid,
        record.recordingfile,
        record.cnum,
      ])
    }

    // Atualiza CDR FreePBX
    await connectionFreePBX.execute(
      'UPDATE cdr SET sync = 1 WHERE sync IS NULL'
    )

    // Commit das transações
    await connectionFreePBX.commit()
    await connectionSpeakr.commit()

    console.log(
      `✅ Sincronização concluída: ${dados.length} registros processados`
    )
  } catch (error) {
    // Rollback em caso de erro
    if (connectionFreePBX) {
      await connectionFreePBX.rollback()
    }
    if (connectionSpeakr) {
      await connectionSpeakr.rollback()
    }

    console.error('❌ Erro ao sincronizar bancos de dados:', error)
    throw error
  } finally {
    // Fecha conexões
    if (connectionFreePBX) {
      await connectionFreePBX.end()
    }
    if (connectionSpeakr) {
      await connectionSpeakr.end()
    }
  }
}

// Executa se for chamado diretamente
if (require.main === module) {
  syncFreePBXDatabase()
    .then(() => {
      console.log('🎉 Sincronização finalizada com sucesso')
      process.exit(0)
    })
    .catch((error) => {
      console.error('💥 Falha na sincronização:', error)
      process.exit(1)
    })
}
