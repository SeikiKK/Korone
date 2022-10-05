module.exports = {
name: "rank",
aliases: [`ranking`, `lvlr`],
code: `
$title[1;<:Ranking:1026520725479235665> | Ranking]
$description[1;
1 - $if[$splitText[1]==;Não listado;$splitText[1]] <:Ranking_top1:1026519699334373446>
2 - $if[$splitText[2]==;Não listado;$splitText[2]] <:Ranking_top2:1026519693340704898>
3 - $if[$splitText[3]==;Não listado;$splitText[3]] <:Ranking_top3:1026519687149920266>
4️ - $if[$splitText[4]==;Não listado;$splitText[4]]
5️ - $if[$splitText[5]==;Não listado;$splitText[5]]
6️ - $if[$splitText[6]==;Não listado;$splitText[6]]
7️ - $if[$splitText[7]==;Não listado;$splitText[7]]
8 - $if[$splitText[8]==;Não listado;$splitText[8]]
9️ - $if[$splitText[9]==;Não listado;$splitText[9]]
10 - $if[$splitText[10]==;Não listado;$splitText[10]]]
$footer[1;$username;$authorAvatar]
$textSplit[$userLeaderboard[$guildID;Total;asc;{username} » {value} $getServerVar[lvl]];
]
$color[00FF1F]
`
}
