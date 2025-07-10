# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma API para gerenciamento de agentes inteligentes.

## 🚀 Tecnologias Utilizadas

### Backend
- **Fastify** - Framework web para Node.js
- **TypeScript** - Linguagem de programação tipada
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão para vetores no PostgreSQL
- **Zod** - Validação de schemas e tipos
- **Google GenAI** - Integração com IA do Google

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatter
- **Docker Compose** - Containerização do banco de dados
- **Drizzle Kit** - Ferramentas para migrações e seeds

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts    # Conexão com banco de dados
│   ├── migrations/      # Migrações do Drizzle
│   ├── schema/         # Schemas das tabelas
│   └── seed.ts         # Dados iniciais
├── http/
│   └── get-rooms.ts    # Rotas da API
├── env.ts              # Configuração de variáveis de ambiente
└── server.ts           # Servidor principal
```

## 🛠️ Padrões de Projeto

- **Clean Architecture** - Separação clara de responsabilidades
- **Type Safety** - Uso extensivo de TypeScript e Zod
- **Environment Validation** - Validação de variáveis de ambiente
- **Database Migrations** - Controle de versão do banco de dados
- **API RESTful** - Endpoints bem estruturados

## ⚙️ Configuração e Setup

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### 1. Clone o repositório
```bash
git clone <repository-url>
cd nlw-agents/server
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5435/agents
```

### 4. Inicie o banco de dados
```bash
docker-compose -f docker-compose.dev.yml up -d
```

### 5. Execute as migrações
```bash
npm run db:generate
npm run db:migrate
```

### 6. (Opcional) Execute o seed
```bash
npm run db:seed
```

### 7. Inicie o servidor
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

## 📡 Endpoints da API

- `GET /health` - Health check do servidor
- `GET /rooms` - Lista todas as salas

## 🧪 Testando a API

Use o arquivo `cliente.http` para testar os endpoints ou acesse:
- Health check: http://localhost:3333/health
- Rooms: http://localhost:3333/rooms

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm start` - Inicia o servidor em modo produção
- `npm run db:generate` - Gera migrações do Drizzle
- `npm run db:migrate` - Executa migrações no banco
- `npm run db:seed` - Popula o banco com dados iniciais

---

Desenvolvido com 💜 durante o NLW da Rocketseat 