const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "unlock", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("MANAGE_CHANNELS")
     if(!perms) return message.channel.send("No tienes suficientes permisos.")

     if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No tengo suficientes permisos.")

     const everyone = message.guild.roles.cache.find(
       rol => rol.name === "@everyone"
     );
          
     message.channel.updateOverwrite(everyone, { SEND_MESSAGES: true})

     const embed = new Discord.MessageEmbed()
     .setTitle("Este canal fue desbloqueado con éxito.")
     .setDescription("Ahora todos pueden escribir mensajes.")
     .setImage("https://media.discordapp.net/attachments/804842440766390292/819397239150477312/source.gif?width=755&height=566")
     .setColor("RANDOM")
     .setTimestamp()

     message.channel.send(embed)

 }

} 