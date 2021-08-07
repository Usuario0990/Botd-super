const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const distube = require("distube")

module.exports = {
  name: "pause", 
  alias: [], 

execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("<a:equis1:839254207680348160> Debes estar en un canal de voz para usar este comando!")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<a:equis1:839254207680348160> Debes estar en el mismo canal de voz que yo!")

  if(!serverQueue) return message.channel.send("<a:equis1:839254207680348160> No hay canciones reproduciendose ahora mismo.")

  if(serverQueue.pause) return message.channel.send("La música ya está pausada!")

  client.distube.pause(message)

  message.channel.send("⏸️ La canción ha sido pausada correctamente.")

 }

} 