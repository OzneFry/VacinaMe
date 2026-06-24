# Spec exemplo: API Playground de vacinas

## Título da feature

Exibir a lista de vacinas consumindo uma API local.

## Objetivo

Permitir que o usuário visualize as vacinas disponíveis a partir de uma fonte local simulada, sem precisar de backend real.

## Regras de negócio

- A tela deve buscar os dados ao abrir.
- Enquanto os dados estão sendo carregados, deve aparecer um estado de carregamento.
- Se a requisição falhar, a tela deve mostrar uma mensagem de erro.
- Se a requisição for bem-sucedida, deve exibir uma lista com nome, local e data.

## Fluxo do usuário

1. O usuário entra na tela de API Playground.
2. A aplicação inicia a busca dos dados.
3. A tela mostra carregamento até receber a resposta.
4. O usuário visualiza a lista de vacinas ou uma mensagem de erro.

## Dados envolvidos

### Inputs
- Nenhum input manual do usuário.
- A aplicação utiliza a URL da API local.

### Outputs
- Lista de objetos com os campos: id, nome, local e data.
- Mensagem de carregamento.
- Mensagem de erro, quando necessário.

## Contrato de API

- Método: GET
- Endpoint: http://10.0.2.2:3000/vaccines
- Resposta esperada: array de objetos no formato:

```json
[
  {
    "id": 1,
    "nome": "Pfizer",
    "local": "UBS Central",
    "data": "2025-07-01"
  }
]
```

- Possíveis erros: falha de rede, endpoint indisponível ou resposta inválida.

## Critérios de aceite

- [ ] A tela exibe um indicador de carregamento ao buscar os dados.
- [ ] A lista de vacinas é renderizada quando a API responde corretamente.
- [ ] Uma mensagem de erro é exibida quando a requisição falha.
- [ ] Cada item mostra nome, local e data.

## Dependências

- json-server
- arquivo db.json
- fetch dentro da tela
- componentes existentes de header, card e container
