# Markdown Links

Markdown é uma linguagem de marcação muito popular entre os programadores. É usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc), e é muito comum encontrar arquivos com este formato em qualquer repositório (começando pelo tradicional README.md).

## O Projeto 

Este pojeto tem como objetivo 

## Como instalar:

```shell

$ npm install jpbnascimento/MarkdownLinks

```

## Como utilizar:

```node

> const MarkdownLinks = require("jpbnascimento/MarkdownLinks");
> MarkdownLinks("./example.md")
> .then(links => {
    // => [{ href, text }]
  })
> .catch(console.error);

```

## Tecnologias Usadas:

Para criar esta biblioteca foi utilizado o JavaScript, teste com Jest, NodeJs.

## Desenvolvedora 

• Jéssica Nascimento / Laboratória SP