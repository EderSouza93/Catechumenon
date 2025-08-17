# Catechumenon 📖

Plataforma de estudos reformados baseada na Confissão de Fé de Westminster e nos Catecismos Maior e Menor.

## Tecnologias 🚀

- [Node.js](https://nodejs.org/) - Runtime JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Express](https://expressjs.com/) - Framework web
- [TypeORM](https://typeorm.io/) - ORM para PostgreSQL
- [Tsyringe](https://github.com/microsoft/tsyringe) - Injeção de dependência
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional

## Estrutura de Pastas 📂

```
src
 ├── domain
 │   └── confession
 │       ├── Confession.ts        # entidade
 │       └── IConfessionRepo.ts   # contrato do repositório
 │
 ├── infrastructure
 │   ├── db
 │   │   └── data-source.ts       # config TypeORM
 │   └── repositories
 │       └── ConfessionRepo.ts    # implementação do repositório
 │
 ├── application
 │   └── services
 │       └── ConfessionService.ts # regras de negócio
 │
 ├── interfaces
 │   └── http
 │       ├── controllers
 │       │   └── ConfessionController.ts
 │       └── routes
 │           └── confession.routes.ts
 │
 └── server.ts                    # inicialização do servidor
```

## Configuração e Execução ⚙️

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/confessio.git
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Configure o PostgreSQL em `src/infrastructure/db/data-source.ts` com suas credenciais.

4. Rode o servidor:
   ```bash
   yarn dev
   ```

## Rotas Iniciais 📍

- `GET /confessions` - Lista todas as confissões

## Scripts Úteis 🔧

- `yarn dev` - Inicia o servidor em modo desenvolvimento
- `yarn build` - Compila o TypeScript para JavaScript
- `yarn start` - Inicia o servidor em produção

## Próximos Passos 📌

- [ ] Adicionar seed do Catecismo
- [ ] Implementar progresso de usuário
- [ ] Configurar autenticação
- [ ] Escrever testes unitários e de integração
- [ ] Adicionar suporte a Docker

## Licença 📜

Licença MIT - Open-source

**Soli Deo Gloria ✨**