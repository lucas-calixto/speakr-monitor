import { db } from '@/db'
import { callsHistory } from '@/db/schema'
import { eq } from 'drizzle-orm'

/**
 * Retorna todas as chamadas que devem ser mostradas no painel.
 *
 * @param queue (A fila)
 */
export const setOnPanel = async () => {
  try {
    const response = await db
      .select()
      .from(callsHistory)
      .where(eq(callsHistory.showOnPanel, true))

    if (response) {
      return response
    } else {
      console.info('Sem chamadas para visualizar')
    }
  } catch (error) {
    console.error(`Erro ao encontrar chamadas ativas da fila : ${error}`)
    return error
  }
}
