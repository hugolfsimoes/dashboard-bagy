# Dashboard Bagy

# Contexto

Desafio técnico frontend da Bagy, onde deveria ser implementado um dashboard em ReactJs(sem utilização de bibliotecas de componentes, apenas para componentes gáficos) de visualização de dados.
O layout para implementação está no [Figma](https://www.figma.com/file/fTxV4ZLMNlHtuy675J5TAj/Dashboard-Bagy-2020?node-i
d=0%3A1)

## Técnologias usadas

Front-end:

> Desenvolvido usando: ReactJs, context, CSS3, HTML5, Rechart

Back-end:

> Feito um Fake Server Rest utilizando [Json-server](https://github.com/typicode/json-server)

## Para executar em ambiente local

```bash
 git@github.com:hugolfsimoes/dashboard-bagy.git
```

## Instalando Dependências

> Frontend

```bash
cd src/
npm install
```

## Executando aplicação

- Para rodar o Fake Server na porta 3004:

  ```bash
  cd src/ && json-server --watch db.json --port 3004
  ```

- Para rodar o front-end na porta 3000:

  ```bash
    cd src/ && npm start
  ```

## Próximos passos

- Implementação de testes.
- Aplicação de funcionalidades dinâmicas em alguns componentes.
- Implementação das páginas restantes.
