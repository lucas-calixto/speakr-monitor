import 'dotenv/config'

import { startSocket } from './services/socket'
import { syncFreePBXDatabaseJob } from './services/syncFreePBXDatabaseJob'

startSocket()
syncFreePBXDatabaseJob()
