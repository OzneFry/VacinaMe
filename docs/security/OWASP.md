# Relatório OWASP Top 10

## 1. Injection

- Status: Não vulnerável no estado atual
- Justificativa: A aplicação não constrói consultas SQL ou comandos de sistema a partir de entrada do usuário. O fluxo atual é limitado a fetch em uma API mock local.
- Mitigação: Não há mitigação específica implementada, mas o risco é baixo no contexto atual.
- Sugestões de melhoria: Se futuramente houver integração com backend real, usar consultas parametrizadas e validar entradas antes de processá-las.

## 2. Broken Authentication

- Status: Não aplicável / não implementado
- Justificativa: A aplicação atual não possui autenticação, login, sessão ou autorização.
- Mitigação: Não existe.
- Sugestões de melhoria: Implementar autenticação robusta, controle de sessão e autorização por perfil.

## 3. Sensitive Data Exposure

- Status: Baixo risco no estado atual
- Justificativa: O projeto não trata dados sensíveis de usuários nem armazena credenciais. Os dados exibidos são informações básicas de vacinas mockadas.
- Mitigação: O projeto não implementa criptografia ou proteção especial para dados em trânsito ou armazenamento.
- Sugestões de melhoria: Em caso de evolução para produção, usar HTTPS, evitar expor dados desnecessários e proteger qualquer dado pessoal.

## 4. Security Misconfiguration

- Status: Vulnerável parcialmente
- Justificativa: O projeto depende de um servidor local json-server e não possui configuração de segurança adicional para ambiente de execução.
- Mitigação: Não há configuração explícita de segurança para produção.
- Sugestões de melhoria: Definir ambientes separados, restringir portas e evitar exposição desnecessária de endpoints.

## 5. Cross-Site Scripting (XSS)

- Status: Baixo risco / não aplicável no cenário atual
- Justificativa: A aplicação renderiza dados vindos de uma API mock local, mas não há integração com HTML dinâmico ou conteúdo de usuário diretamente injetado no DOM.
- Mitigação: Não há uma camada de sanitização específica implementada.
- Sugestões de melhoria: Se houver evolução para web com conteúdo dinâmico gerado pelo usuário, sanitizar entradas e evitar renderização insegura.

## 6. Insecure Data Handling

- Status: Vulnerável parcialmente
- Justificativa: O projeto não implementa um padrão formal de tratamento de dados, validação de respostas da API ou proteção contra respostas inesperadas.
- Mitigação: Existe apenas validação simples de formato da resposta no componente de tela.
- Sugestões de melhoria: Adotar validação de schemas, tratamento padronizado de erro e controle de confiança nas respostas da API.

## 7. Resumo geral

O projeto atual é um protótipo acadêmico simples, com baixo risco de vulnerabilidades críticas em comparação a sistemas com autenticação e processamento sensível. Ainda assim, há espaço para melhorias de segurança caso o projeto evolua para um ambiente mais próximo da produção.
