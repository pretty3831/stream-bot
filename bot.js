const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['الشيخ','بريتي','شخصيآ','كبير',' مجالك'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/one`);
    }, ms);
  console.log('---------------');
  console.log('GaMerZ -Bot Is Online')
  console.log('---------------')
});




client.login("NTI0Nzg4NTkwNjY5MjAxNDE4.Dyi9sg.I_97ua0m6vOAvjD-DhdXqktKUGA");