import { db } from '@/db'
import { callsHistory } from '@/db/schema'
import { type callType } from '@/types/call'

/**
 * Adiciona a chamada no banco de dados.
 *
 * @param call (A chamada que é recebida do outro servidor)
 */
export const setCallsHistory = async (call: callType) => {
  const callHistory = {
    status: call.status,
    queue: call.queue,
    extension: call.exten,
    uniqueId: call.uniqueid,
    linkId: call.linkedid,
    phoneNumber: call.phoneNumber,
    showOnPanel: call.showOnPanel,
  }

  try {
    const response = await db
      .insert(callsHistory)
      .values(callHistory)
      .$returningId()

    if (response) {
      console.log('Chamada adicionada no banco de dados.')
      return
    } else {
      console.warn('não foi possível adicionar a chamada')
      return null
    }
  } catch (error) {
    console.error(`Erro ao adicionar a chamada: ${error}`)
  }
}
