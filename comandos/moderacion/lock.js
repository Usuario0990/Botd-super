const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "lock", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return; 

  var perms = message.member.hasPermission("MANAGE_CHANNELS")
     if(!perms) return message.channel.send("No tienes suficientes permisos.")

     if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No tengo suficientes permisos.")

     const everyone = message.guild.roles.cache.find(
       rol => rol.name === "@everyone"
     );

     message.channel.updateOverwrite(everyone, { SEND_MESSAGES: false})

     const embed = new Discord.MessageEmbed()
     .setTitle("Este canal fue bloqueado con éxito.")
     .setDescription("Nadie puede escribir aquí excepto los Administradores del servidor. Si deseas desbloquearlo prueba con el comando unlock.")
     .setImage("https://media.discordapp.net/attachments/804842440766390292/819397783765123092/bloqueado.gif?width=755&height=566")
     .setColor("RANDOM")
     .setTimestamp()

     message.channel.send(embed)

 }

} 