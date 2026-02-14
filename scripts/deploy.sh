#!/bin/bash

# Script de Deploy Automático - Speakr Monitor
# Uso: ./scripts/deploy.sh [environment]

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configurações
ENVIRONMENT=${1:-production}
LOG_FILE="./deploy.log"

# Funções
log() {
  echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a $LOG_FILE
}

error() {
  echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a $LOG_FILE
  exit 1
}

warning() {
  echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a $LOG_FILE
}

# Header
echo "=========================================="
echo "  🚀 Deploy Fácil Monitor Backend - $ENVIRONMENT"
echo "=========================================="
echo ""

# Verificar se está em um repositório git
if [ ! -d ".git" ]; then
  error "Não está em um repositório git. Execute este script na raiz do projeto."
fi

log "🎯 Iniciando deploy para ambiente: $ENVIRONMENT"

# 1. Fazer pull das alterações
log "📥 Fazendo pull das alterações..."
git pull origin main || error "Falha ao fazer pull das alterações"

# 2. Instalar dependências
log "📦 Instalando dependências..."
npm i || error "Falha ao instalar dependências"

# 3. Build
log "🔨 Compilando aplicação..."
npm build || error "Falha na compilação"

# 4. Reiniciar servidor de produção
log "🔄 Reiniciando aplicação com PM2..."
pm2 restart monitor-backend || error "Falha ao reiniciar com PM2"

echo ""
echo "=========================================="
echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
echo "=========================================="
echo ""
log "📊 Para monitorar a aplicação: pm2 logs"
log "📈 Para ver status: pm2 status"
