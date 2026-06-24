# Software Design Description (SDD)

## 1. Visão geral do sistema

O projeto VacinaMe é uma aplicação mobile acadêmica construída com Expo, React Native e TypeScript. A proposta atual é demonstrar conceitos básicos de interface, consumo de API e organização simples de componentes em uma aplicação de exemplo.

A aplicação atual apresenta uma tela principal de apresentação e uma tela de playground para consumo de dados de vacinas a partir de uma API mock local, utilizando json-server.

## 2. Arquitetura atual

A arquitetura do projeto é simples e não usa padrões formais como DDD ou Clean Architecture. A estrutura atual é organizada em:

- Screens: responsáveis por exibir telas e controlar estados locais.
- Components: componentes reutilizáveis de interface.
- Theme: configuração visual centralizada para cores, espaçamento e estilos.
- Mock API: arquivo JSON e servidor json-server para simular backend.

A camada de apresentação é composta por telas como HomeScreen e ApiPlaygroundScreen, com lógica local de carregamento de dados e renderização de listas.

## 3. Fluxo de dados

O fluxo atual da aplicação segue este caminho:

1. A tela ApiPlaygroundScreen é renderizada.
2. O componente executa useEffect para buscar os dados no endpoint /vaccines.
3. A requisição é feita via fetch.
4. A resposta é convertida em JSON.
5. Os dados são armazenados em estado local com useState.
6. A interface renderiza uma lista de vacinas ou exibe estados de loading/erro.

Fluxo simplificado:

UI -> fetch -> json-server -> JSON -> state local -> renderização

## 4. Estrutura de pastas

```text
app/
  src/
    components/
    screens/
    theme/
  tests/
    e2e/
  db.json
  package.json
  App.tsx
```

Os principais elementos são:

- app/src/components: componentes reutilizáveis como AppButton, AppCard, AppHeader e ScreenContainer.
- app/src/screens: telas da aplicação, incluindo exemplos de layout e consumo de API.
- app/src/theme: definição de tokens visuais usados pelos componentes.
- app/db.json: base de dados mock para o json-server.
- app/tests/e2e: testes end-to-end com Playwright.

## 5. Decisões técnicas

- Expo foi escolhido para facilitar execução e desenvolvimento mobile.
- React Native com TypeScript foi adotado para manter tipagem e organização simples.
- json-server foi usado para simular uma API REST sem necessidade de backend real.
- O estado local é gerenciado com useState e useEffect, sem biblioteca adicional de estado global.
- A estilização é feita com StyleSheet e uma camada de tema centralizada.

## 6. Limitações atuais do sistema

- Não há autenticação ou autorização.
- Não há camada de serviço separada para API.
- Não há persistência real de dados.
- A aplicação é principalmente um protótipo acadêmico, sem arquitetura formal para escalabilidade.
- O endpoint de API é simples e depende de ambiente local para funcionamento.
- Não há tratamento avançado de cache, retry ou integração com backend real.

## 7. Considerações de entrega acadêmica

Este documento descreve o estado atual do projeto de forma fiel, sem introduzir abstrações inexistentes. A intenção é documentar a implementação real, simples e didática, compatível com o contexto acadêmico do sistema.
