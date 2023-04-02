## Fred, the bot

Fredddddddddd!

Segui o [discordjs.guide](discordjs.guide) até o "event handling" da parte "creating your bot".

Parar rodar:
```bash
# Coloque as variáveis de ambientes necessárias no arquivo .env assim como descrito no .env.example

# Instala as dependências necessárias
$ npm i

# Atualiza os comandos do bot
$ node deploy-commands.js

# Inicializa o bot
$ node .
```

Tree:
```bash
.
├── commands
│   ├── ping.js
│   ├── server.js
│   └── user.js
├── events
│   ├── interactionCreate.js
│   └── ready.js
├── node_modules
├── .env
├── .eslintrc.json
├── .gitignore
├── deploy-commands.js
├── index.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```
- `commands`: pasta com cada comando do bot
- `events`: pasta com cada evento relacionado ao bot
- `deploy-commands.js`: atualiza os comandos do bot
- `index.js`: carrega os eventos, os comandos e inicializa