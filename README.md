# Mercado Livre BFF

BFF para o frontend do teste de frontend do Mercado Livre. Baseado no [NET.ts](https://github.com/przemek-nowicki/node-express-template.ts)

## Como executar

Para executar o BFF localmente, será necessário expor variáveis de ambiente no seu sistema, elas estão localizadas no arquivo `.env.local`. Para isso, abra um terminal na pasta raiz do projeto e execute os seguintes comandos: `source .env.local` e `export NODE_ENV PORT API_KEY_TOKEN MERCADO_LIBRE_API_URL`.

Instale as dependências:

```
yarn
```

Execute o servidor em modo de desenvolvimento:

```
yarn server:dev
```

Você poderá acessar o servidor em [http://localhost:3001](http://localhost:3001).
