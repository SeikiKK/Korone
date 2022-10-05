module.exports = ({

  name: "$alwaysExecute",

  code: `$setUserVar[reqxp;$sum[$getUserVar[reqxp];100]]

 $setUserVar[lvl;$sum[$getUserVar[lvl];1]] 

 $setUserVar[xp;0]



 $channelSendMessage[881164927417614366;**Parabéns <@$authorID>!** Você subiu para o level $sum[$getUserVar[lvl];1]

 $onlyif[$getUserVar[xp]>=$getUserVar[reqxp];]

 

 $onlyif[$isBot[$authorID]==false;]`

})