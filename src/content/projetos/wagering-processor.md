---
titulo: Distributed Wagering Processor
resumo: Processador de apostas de cassino correto sob entregas duplicadas, fora de ordem e concorrentes.
stack: [TypeScript, NestJS, PostgreSQL, AWS SQS]
status: em desenvolvimento
tipo: Back-end
categoria: web
repo: https://github.com/TheNewGuy100/Distributed-Wagering-Processor
destaques:
  - titulo: Idempotência
    texto: Transações BET, WIN, LOSS, REFUND e ROLLBACK de vários provedores, sem efeito duplo.
  - titulo: Concorrência
    texto: Núcleo transacional e outbox por carteira, funcionando com qualquer número de instâncias.
  - titulo: Observabilidade
    texto: Grafana, Prometheus e Keycloak sobem com um único comando do Docker Compose.
ordem: 7
---
Processa transações de apostas de vários provedores de jogos e se mantém financeiramente correto mesmo com mensagens duplicadas, fora de ordem ou concorrentes. Feito com Bun, TypeScript, NestJS, MikroORM, PostgreSQL e SQS, com as decisões e limitações documentadas em um ARCHITECTURE.md.
