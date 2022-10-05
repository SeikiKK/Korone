module.exports = {
    name: "clear",
    aliases: [`purge`, `clean`],
    code: `
    $clear[$message;unPins;no;$channelID[$channelName]]
    $onlyPerms[managemessages; Você precisa ter permissão de \`Gerenciar Mensagens\`]
    $cooldown[15s; Você está indo rápido demais, espere %time%!]
    $onlyIf[$message!=;Enumere a quantidade a ser deletada.]
    `
}