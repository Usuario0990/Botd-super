const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "8ball", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;
  var Mensajes = ["No :x:", "Si :white_check_mark:", "Probablemente no", "Probablemente Si", "Tal vez :thinking:", "Puedes confiar en ello", "¡Por supuesto que No!", "No cuentes con eso", "Sin duda", "Es mejor no decirte ahora...", "Concéntrate muy bien y pregunta otra vez", "Puede ser, probablemente...", "Respuesta confusa, intenta otra vez", "Sí, definitivamente", "Muy dudoso", "Las señales apuntan a que sí."];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length)); 
   if (args.join(" ").length < 1) return message.reply("Debes escribir tu pregunta!");
    const embed = new Discord.MessageEmbed()    
    .setColor("YELLOW")
    .setThumbnail("https://media.discordapp.net/attachments/804842440766390292/809877749765898330/magicBallStart.png")
    .setTimestamp()
     .addField('A tu pregunta:', args.join(" "), {
    })
    .addField('Mi respuesta es:', Mensajes[aleatorio])
    
    message.channel.send(embed)

 }

} 