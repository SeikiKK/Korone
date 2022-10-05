module.exports = ({

  name: "$alwaysExecute",

  code: `$color[RANDOM]
  <:LevelUp:1026519438457065492> | Parabéns <@$authorID>! Você subiu para o nível **$setUserVar[xp;$sum[$getUserVar[xp];$random[1;10]]]**!

  

  $onlyIf[$isBot[$authorID]==false;]

  

  $cooldown[2s;]`

})