const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "volume", 
  alias: ["volumen"], 

execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("<a:equis1:839254207680348160> Debes estar en un canal de voz para usar este comando!")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<a:equis1:839254207680348160> Debes estar en el mismo canal de voz que yo!")

  if(!serverQueue) return message.channel.send("<a:equis1:839254207680348160> No hay canciones reproduciendose ahora mismo!")

  const volume = args[0]

  if(!volume) return message.channel.send("<a:equis1:839254207680348160> Hey! Debes poner cuanto volumen quieres!")

  if(!isNaN) return message.channel.send("<a:equis1:839254207680348160> Hey! Lo que has puesto no es un número!")

  if(volume < 1) return message.channel.send("<a:equis1:839254207680348160> La cantidad de volumen debe ser mayor que 0!")

  if(volume > 100) return message.channel.send("<a:equis1:839254207680348160> Hey! ¿Te quieres romper los oídos con ese volumen? El máximo es 100!")

  client.distube.setVolume(message, volume)

  message.channel.send(`<a:check1:839254203032535080> El volumen ha sido establecido a **${volume}%**`)

 }

} 