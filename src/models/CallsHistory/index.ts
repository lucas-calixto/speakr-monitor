import { setCallsHistory } from './controllers/setCallHistory'
import { getThisCall } from './controllers/getThisCall'
import { updateStatus } from './controllers/updateStatus'
import { setOnPanel } from './controllers/setOnPanel'

export const CallsHistoryModel = {
  setCallsHistory,
  getThisCall,
  updateStatus,
  setOnPanel,
}
