module.exports = {
  name: "ping",
  aliases: ['ms'],
    prototype: "slash",
  code: `
$title[🏓 Pong!]
  $color[RANDOM]
  $description[Minha latência é de: \`$pingms\`]
  `
}