module.exports = ({

name: "nível",
aliases: [`level`, `lvl`, `mylvl`],

code: `
$description[> Nível: $getUserVar[lvl;$mentioned[1;yes]] ($getUSerVar[xp;$mentioned[1;yes]])

  > Exp. necessária para próximo level: $getUserVar[xp;$mentioned[1;yes]]/$getUserVar[reqxp;$mentioned[1;yes]]

  ]

  $color[RANDOM]`

})