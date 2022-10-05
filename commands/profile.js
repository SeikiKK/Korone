module.exports = {
name: "perfil",
aliases: [`profile`],
code: `
$color[CD5C5C]
$title[Perfil de $username[$findUser[$mentioned[1];yes]]]
$description[<:user:1024803559381938196> | Usuário:
**$userTag[$findUser[$mentioned[1];yes]]**
<:Calendario:1023012808796950659> | Criação da Conta:
$creationDate[$mentioned[1]]
<:status:1024802305024999455> | Status:
$status[$mentioned[1]]
<:Level:1026525801069424701> | Nível: 
$getUserVar[lvl] ($getUserVar[xp] <:Experience:1024802718386241618>)
<:BookQuill:1024800237405085746> | Descrição:
$getUserVar[descrição;$mentioned[1;yes]]]
$image[https://media.discordapp.net/attachments/1024794812186112173/1024794995657551983/Red_GIF_-_Red_-_Discover__Share_GIFs.gif]
`
}