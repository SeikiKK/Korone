module.exports = {
name: "say", 
aliases: [`msg`, `falar`],
code: `
$message
$onlyIf[$message!=;Digite algo!]
$onlyPerms[managemessages;Você precisa da permissão \`Gerenciar Mensagens\` para executar o comando.]
`
}