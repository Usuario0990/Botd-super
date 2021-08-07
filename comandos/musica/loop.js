const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "loop", 
  alias: ["repeat"], 

execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("<a:equis1:839254207680348160> Debes estar en un canal de voz para usar este comando!")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<a:equis1:839254207680348160> Debes estar en el mismo canal de voz que yo!")

  if(!serverQueue) return message.channel.send("<a:equis1:839254207680348160> No hay canciones reproduciendose ahora mismo.")

  let opcion = args[0]
  if(!opcion) return message.channel.send("<a:equis1:839254207680348160> Debes escribir una opción! 0, 1 o 2.")

  if(opcion !== "0"){
    if(opcion !== "1"){
      if(opcion !== "2"){
        return message.channel.send("<a:equis1:839254207680348160> Eso no es un opción valida!")
      }
    }
  }

  if(opcion === "0"){
    client.distube.setRepeatMode(message, 0)
    message.channel.send("<a:check1:839254203032535080> La repetición ha sido **Desactivada**")
    return;
  }

  if(opcion === "1"){
    client.distube.setRepeatMode(message, 1)
    message.channel.send("<a:check1:839254203032535080> La repetición de la canción actual ha sido activada!")
    return;
  }

  if(opcion === "2"){
    client.distube.setRepeatMode(message, 2)
    message.channel.send("<a:check1:839254203032535080> La repetición de la playlist ha sido activada!")
    return;
  }

 }

} 