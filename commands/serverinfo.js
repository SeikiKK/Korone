module.exports = {
name: "Serverinfo",
aliases: [`InfoServer`, `serverinfo`],
code: `
$title[<:ServerInfo:1026853700079198288> | Informações de Servidor!]
$description[$guildName[$guildID]
<:ServerOwner:1026853218791202826> | Dono(a) do Servidor
$userTag[$ownerID]
<:Safety:1026857578426282134> | Segurança do Servidor
$serverVerificationLevel
<:ServerBooster:1026853711965855834> | Boost do Servidor
$serverBoostLevel ($serverBoostCount Boost's)
<:Roles:1026855068810625055> | Cargos do Servidor
<@&$randomRoleID>, <@&$randomRoleID>, <@&$randomRoleID>... ($roleCount)
<:ServerMember:1026853703392706601> | Contador
Atualmente temos **$membersCount[$guildID;all;no] membros** no servidor!
<:Channel:1026854628727464048> | Canais do Servidor
<:VoiceChannel:1026854625514627092> $channelCount[$guildID;voice] Canais de Voz
<:Channel:1026854628727464048> $channelCount[$guildID;text] Canais de Texto
🍃 | Emojis do Servidor 
$serverEmojis ($emojiCount[$guildID])]
$color[00FF1F]
`
}