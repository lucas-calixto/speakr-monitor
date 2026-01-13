import {
  mysqlTable,
  int,
  varchar,
  text,
  boolean,
  datetime,
  float,
  unique,
  index,
} from 'drizzle-orm/mysql-core'
import { relations } from 'drizzle-orm'
import { sql } from 'drizzle-orm'

// AdmUsers table
export const admUsers = mysqlTable('AdmUsers', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }),
  recoveryToken: text('recoveryToken'),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
})

// Clients table
export const clients = mysqlTable('Clients', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  cpfCnpj: varchar('cpfCnpj', { length: 255 }).notNull(),
  type: varchar('type', { length: 255 }).notNull(),
  phoneNumber: varchar('phoneNumber', { length: 255 }).notNull(),
  street: varchar('street', { length: 255 }).notNull(),
  district: varchar('district', { length: 255 }).notNull(),
  number: varchar('number', { length: 255 }),
  city: varchar('city', { length: 255 }).notNull(),
  zipCode: varchar('zipCode', { length: 255 }).notNull(),
  state: varchar('state', { length: 255 }).notNull(),
  isActive: boolean('isActive').notNull(),
  observation: text('observation'),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
})

// Users table
export const users = mysqlTable('Users', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  cpf: varchar('cpf', { length: 255 }).notNull(),
  phoneNumber: varchar('phoneNumber', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }),
  recoveryToken: text('recoveryToken'),
  accessType: varchar('accessType', { length: 255 }).notNull(),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  clientId: int('clientId').notNull(),
})

// Contracts table
export const contracts = mysqlTable('Contracts', {
  id: int('id').primaryKey().autoincrement(),
  startedAt: datetime('startedAt').notNull(),
  finishedAt: datetime('finishedAt').notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  clientId: int('clientId').notNull(),
})

// Extensions table
export const extensions = mysqlTable('Extensions', {
  id: int('id').primaryKey().autoincrement(),
  ramal: varchar('ramal', { length: 255 }).notNull().unique(),
  description: varchar('description', { length: 255 }),
  password: varchar('password', { length: 255 }),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  clientId: int('clientId').notNull(),
})

// Queues table
export const queues = mysqlTable('Queues', {
  id: int('id').primaryKey().autoincrement(),
  code: varchar('code', { length: 255 }).notNull().unique(),
  description: varchar('description', { length: 255 }),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  clientId: int('clientId').notNull(),
})

// Numbers table
export const numbers = mysqlTable('Numbers', {
  id: int('id').primaryKey().autoincrement(),
  number: varchar('number', { length: 255 }).notNull().unique(),
  description: varchar('description', { length: 255 }),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  clientId: int('clientId').notNull(),
})

// Cdr table
export const cdr = mysqlTable('Cdr', {
  id: int('id').primaryKey().autoincrement(),
  linkedid: int('linkedid').notNull().unique(),
  callDate: datetime('callDate'),
  source: varchar('source', { length: 255 }),
  destination: varchar('destination', { length: 255 }),
  channel: varchar('channel', { length: 255 }),
  queue: varchar('queue', { length: 255 }),
  queueName: varchar('queueName', { length: 255 }),
  agent: varchar('agent', { length: 255 }),
  direction: varchar('direction', { length: 255 }),
  status: varchar('status', { length: 255 }),
  recordingFile: varchar('recordingFile', { length: 255 }),
  duration: int('duration'),
  waitingTime: int('waitingTime'),
  serviceTime: int('serviceTime'),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  clientId: int('clientId').notNull(),
})

// Devices table
export const devices = mysqlTable('Devices', {
  id: int('id').primaryKey().autoincrement(),
  description: varchar('description', { length: 255 }).notNull(),
  serialNumber: varchar('serialNumber', { length: 255 }).notNull(),
  mac: varchar('mac', { length: 255 }).notNull(),
  brand: varchar('brand', { length: 255 }).notNull(),
  model: varchar('model', { length: 255 }).notNull(),
  isNew: boolean('isNew').notNull(),
  status: varchar('status', { length: 255 }).notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  contractId: int('contractId').notNull(),
})

// Invoices table
export const invoices = mysqlTable('Invoices', {
  id: int('id').primaryKey().autoincrement(),
  barcode: varchar('barcode', { length: 255 }).notNull(),
  value: float('value').notNull(),
  status: varchar('status', { length: 255 }).notNull(),
  dueDate: datetime('dueDate').notNull(),
  fileName: varchar('fileName', { length: 255 }).notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  contractId: int('contractId').notNull(),
})

// CallsHistory table
export const callsHistory = mysqlTable('CallsHistory', {
  id: int('id').primaryKey().autoincrement(),
  status: varchar('status', { length: 255 }).notNull(),
  queue: varchar('queue', { length: 255 }).notNull(),
  extension: varchar('extension', { length: 255 }).notNull(),
  uniqueId: varchar('uniqueId', { length: 255 }).notNull(),
  linkId: varchar('linkId', { length: 255 }).notNull().unique(),
  phoneNumber: varchar('phoneNumber', { length: 255 }),
  showOnPanel: boolean('showOnPanel').default(true).notNull(),
  updatedAt: datetime('updatedAt')
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .notNull(),
  createdAt: datetime('createdAt')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

// cdr_lucas table
export const cdrLucas = mysqlTable('cdr_lucas', {
  linkedid: varchar('linkedid', { length: 255 }).notNull().unique(),
  calldate: datetime('calldate'),
  source: varchar('source', { length: 255 }),
  destination: varchar('destination', { length: 255 }),
  did: varchar('did', { length: 255 }),
  channel: varchar('channel', { length: 255 }),
  dcontext: varchar('dcontext', { length: 255 }),
  queue: varchar('queue', { length: 255 }),
  direction: varchar('direction', { length: 255 }),
  agente: varchar('agente', { length: 255 }),
  agenteName: varchar('agenteName', { length: 255 }),
  status: varchar('status', { length: 255 }),
  recordingFile: varchar('recordingFile', { length: 255 }),
  duration: int('duration'),
  waitingTime: int('waitingTime'),
  sync: int('sync'),
})

// Relations
export const clientsRelations = relations(clients, ({ many }) => ({
  users: many(users),
  contracts: many(contracts),
  extensions: many(extensions),
  queues: many(queues),
  numbers: many(numbers),
  cdr: many(cdr),
}))

export const usersRelations = relations(users, ({ one }) => ({
  client: one(clients, {
    fields: [users.clientId],
    references: [clients.id],
  }),
}))

export const contractsRelations = relations(contracts, ({ one, many }) => ({
  client: one(clients, {
    fields: [contracts.clientId],
    references: [clients.id],
  }),
  devices: many(devices),
  invoices: many(invoices),
}))

export const extensionsRelations = relations(extensions, ({ one }) => ({
  client: one(clients, {
    fields: [extensions.clientId],
    references: [clients.id],
  }),
}))

export const queuesRelations = relations(queues, ({ one }) => ({
  client: one(clients, {
    fields: [queues.clientId],
    references: [clients.id],
  }),
}))

export const numbersRelations = relations(numbers, ({ one }) => ({
  client: one(clients, {
    fields: [numbers.clientId],
    references: [clients.id],
  }),
}))

export const cdrRelations = relations(cdr, ({ one }) => ({
  client: one(clients, {
    fields: [cdr.clientId],
    references: [clients.id],
  }),
}))

export const devicesRelations = relations(devices, ({ one }) => ({
  contract: one(contracts, {
    fields: [devices.contractId],
    references: [contracts.id],
  }),
}))

export const invoicesRelations = relations(invoices, ({ one }) => ({
  contract: one(contracts, {
    fields: [invoices.contractId],
    references: [contracts.id],
  }),
}))
