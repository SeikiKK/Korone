module.exports = {
name: "sobremim",
aliases: [`aboutme`],
code: `
$onlyIf[message!=; Você precisa escrever algo para a descrição!]
$setUserVar[descrição;$message]
✅ Sua descrição foi alterada para: **$message**
`
}