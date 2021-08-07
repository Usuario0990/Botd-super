const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "nuke", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;
     var perms = message.member.hasPermission("MANAGE_CHANNELS");
     if(!perms) return message.channel.send("No tienes suficientes permisos!")

     let link = "https://i.pinimg.com/originals/06/c3/92/06c392b847166a9a671bfcd590d8fff7.gif"

     const nuke = new Discord.MessageAttachment(link, "nuke.gif")

     var posicion = message.channel.position

message.channel.clone().then((canal) => {

        message.channel.delete()

        canal.setPosition(posicion)

        canal.send(`${message.author} explotó este canal`, nuke)


    });    
      

 }

} 