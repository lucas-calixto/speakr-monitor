import cron from 'node-cron'
import { syncFreePBXDatabase } from '../scripts/syncFreePBXDatabase'

// Cron job para sincronizar banco FreePBX a cada 1 minuto
export const syncFreePBXDatabaseJob = () => {
  cron.schedule('* * * * *', async () => {
    console.log('🔄 Iniciando sincronização FreePBX...')
    try {
      await syncFreePBXDatabase()
    } catch (error) {
      console.error('❌ Erro na sincronização agendada:', error)
    }
  })

  console.log(
    '⏰ Cron job de sincronização FreePBX iniciado (executa a cada 1 minuto)'
  )
}
