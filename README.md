# Documentação do Servidor Speakr Monitor

## Sobre o Projeto

O **Speakr Monitor** é um sistema de monitoramento e sincronização de chamadas telefônicas que integra dados entre o FreePBX e o banco de dados da aplicação Speakr. O projeto monitora chamadas em tempo real através de um servidor Socket.IO e sincroniza periodicamente os registros de CDR (Call Detail Record) do FreePBX.

## Funcionalidades Principais

- **Monitoramento de Chamadas em Tempo Real**: Conecta-se a um servidor Socket.IO para receber eventos de chamadas (início, atendimento, abandono e encerramento)
- **Histórico de Chamadas**: Armazena o histórico completo de chamadas com status e informações detalhadas
- **Sincronização Automática**: Sincroniza dados do CDR do FreePBX para o banco de dados Speakr a cada 1 minuto
- **Múltiplos Status**: Rastreia chamadas com status: Chamando, Atendido, Abandonado e Encerrado

## Arquitetura

O projeto utiliza:

- **Node.js** com **TypeScript**
- **Drizzle ORM** para gerenciamento do banco de dados MySQL
- **Socket.IO Client** para comunicação em tempo real
- **node-cron** para tarefas agendadas
- **mysql2** para conexões diretas com bancos FreePBX e Speakr

## Pré-requisitos

- Node.js (v14 ou superior)
- MySQL 8.0
- Acesso aos bancos de dados FreePBX e Speakr
- Servidor Socket.IO configurado

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/lucas-calixto/speakr-monitor.git
cd speakr-monitor
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:

```env
# Monitor Environment Variables
DATABASE_URL="mysql://user:password@host:3306/database"
DATABASE_PASSWORD="database_password"
DATABASE_NAME="database_name"
SOCKET_URL="http://seu-servidor-socket.com:porta"
PORT=3333

# FreePBX Database
FREEPBX_DB_HOST="host_do_database_freepbx"
FREEPBX_DB_USER="user_do_database_freepbx"
FREEPBX_DB_PASSWORD="password_freepbx"
FREEPBX_DB_NAME="nome_do_database_freepbx"

# Speakr Sync Database
SPEAKR_DB_HOST="host_do_database_speakr"
SPEAKR_DB_USER="user_do_database_speakr"
SPEAKR_DB_PASSWORD="password_speakr"
SPEAKR_DB_NAME="nome_do_database_speakr"
```

4. Execute as migrações do banco de dados:

```bash
npm run db:migrate:deploy
```

## Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
```

### Modo de Produção

```bash
# Compilar o projeto
npm run build

# Executar a versão compilada
npm start
```

## Scripts Disponíveis

| Script                        | Descrição                                                    |
| ----------------------------- | ------------------------------------------------------------ |
| `npm run dev`                 | Executa o servidor em modo de desenvolvimento com hot-reload |
| `npm run build`               | Compila o TypeScript para JavaScript                         |
| `npm start`                   | Executa o servidor compilado em produção                     |
| `npm run db:migrate:generate` | Gera novas migrações do banco de dados                       |
| `npm run db:migrate:deploy`   | Aplica as migrações no banco de dados                        |

## Estrutura do Projeto

```
src/
├── db/
│   ├── index.ts              # Conexão com o banco de dados
│   └── schema.ts             # Schema do Drizzle ORM
├── models/
│   └── CallsHistory/         # Modelo de histórico de chamadas
│       ├── index.ts
│       └── controllers/
│           ├── getThisCall.ts
│           ├── setCallHistory.ts
│           ├── setOnPanel.ts
│           └── updateStatus.ts
├── scripts/
│   └── syncFreePBXDatabase.ts # Script de sincronização FreePBX
├── services/
│   ├── socket.ts              # Cliente Socket.IO
│   └── syncFreePBXDatabaseJob.ts # Cron job de sincronização
├── types/
│   └── call.d.ts              # Tipos TypeScript
└── server.ts                  # Ponto de entrada da aplicação
```

## Funcionamento

### 1. Monitoramento de Chamadas (Socket.IO)

O serviço `startSocket` conecta-se ao servidor Socket.IO e escuta os seguintes eventos:

- **QueueCallerJoin**: Quando uma chamada entra na fila (Status: "Chamando")
- **AgentConnect**: Quando um agente atende a chamada (Status: "Atendido")
- **QueueCallerAbandon**: Quando a chamada é abandonada antes do atendimento (Status: "Abandonado")
- **Hangup**: Quando a chamada é encerrada (Status: "Encerrado")

### 2. Sincronização FreePBX

O job `syncFreePBXDatabaseJob` executa a cada 1 minuto:

1. Busca registros não sincronizados no CDR do FreePBX
2. Insere os dados na tabela `cdrs` do banco Speakr
3. Marca os registros como sincronizados no FreePBX

### 3. Modelo de Dados

A tabela principal `CallsHistory` armazena:

- Status da chamada
- Fila
- Extensão
- IDs únicos (uniqueId e linkId)
- Número de telefone
- Visibilidade no painel

## Docker

Execute o banco de dados MySQL usando Docker Compose:

```bash
docker-compose up -d
```

## Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é privado e pertence à Speakr.

## Suporte

Para suporte, entre em contato com a equipe de desenvolvimento.
