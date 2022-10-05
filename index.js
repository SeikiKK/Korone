const aoijs = require('aoi.js');

const bot = new aoijs.Bot({
  token: "MTAyMTE3Njg0ODI0OTUyODQzMQ.GmmLnd.am2LAk5WVqmGyHELRLIgNVUfQ0z6C0ZZlCeeh0",
  prefix: "$getServerVar[prefix]",
  intents: "all",
  mobile: true,

  database:{
    db: require("dbdjs.db"),
    type: "dbdjs.db",
    path: "./database/",
    tables: ["main"],
  }
});

bot.onMessage({
  guildOnly: true
});
bot.onInteractionCreate();

bot.variables({
  prefix: ";",
}, "main");

bot.readyCommand({
  channel: "",
  code: `
  $log[Ligado com sucesso $userTag[$clientID]]
  `
});

    bot.status({
  text: "Em Desenvolvimento",
  type: "PLAYING",
  time: 12
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/"); 


bot.status({
  text: "Testando meus comandos",
  type: "WATCHING",
  time: 12
})

bot.variables({
descrição: 'Use ;sobremim para alterar descrição!',
lvl: '0',
xp: '0',
reqxp: '300'
})