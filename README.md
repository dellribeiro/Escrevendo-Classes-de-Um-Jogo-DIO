# **🎮Escrevendo as Classes de Um Jogo**

## Descrição

Este projeto foi desenvolvido como parte de um desafio da DIO, com o objetivo de criar uma estrutura de jogo em que cada herói possui características únicas e um método de ataque que varia conforme seu tipo.

## Objetivo

Implementar uma classe genérica que representa um herói de aventura com as seguintes características:

- **nome**: o nome do herói.
- **idade**: a idade do herói.
- **tipo**: o tipo do herói (por exemplo: guerreiro, mago, monge, ninja).

Além disso, a classe deve conter um método `atacar`, que exibirá uma mensagem de ataque com base no tipo do herói.

## Detalhes do Método `atacar`

O método `atacar` deve exibir uma mensagem com o tipo de ataque utilizado pelo herói, seguindo a estrutura:

```
O {tipo} atacou usando {ataque}
```

onde:

- `{tipo}` será o tipo do herói, como `mago`, `guerreiro`, `monge`, ou `ninja`.
- `{ataque}` será um ataque específico, dependendo do tipo do herói:
    - Se o herói for um **mago**, o ataque exibido deve ser `usou magia`.
    - Se for um **guerreiro**, o ataque será `usou espada`.
    - Para **monge**, o ataque será `usou artes marciais`.
    - Para **ninja**, o ataque exibido será `usou shuriken`.

#### Exemplo de Saída

Exemplos de mensagens que o programa deve gerar:

- `O mago atacou usando magia`
- `O guerreiro atacou usando espada`

## Como Usar

1. Clone este repositório.

2. Abra o arquivo `src/main.js` em seu editor de código.

3. Execute o arquivo usando Node.js.

   `node main.js`