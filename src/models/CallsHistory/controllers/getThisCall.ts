import { db } from '@/db'
import { callsHistory } from '@/db/schema'
import { eq } from 'drizzle-orm'

/**
 * Função para encontrar uma chamada de acordo com o Link Id da chamada
 *
 * @param linkedid (id da chamada)
 * @returns
 */
export const getThisCall = async (linkedid: string) => {
  try {
    const response = await db.query.callsHistory.findFirst({
      where: eq(callsHistory.linkId, linkedid),
    })

    if (response) {
      return response
    } else {
      return null
    }
  } catch (error) {
    console.error(`Erro ao encontrar a chamada: ${error}`)
  }
}
