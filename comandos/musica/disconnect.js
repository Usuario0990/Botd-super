const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "disconnect", 
  alias: ["leave"], 

execute (client, message, args){

  if(!message.member.voice.channel) return message.channel.send("<a:equis1:839254207680348160> Debes estar en un canal de voz para usar este comando!")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<a:equis1:839254207680348160> Debes estar en el mismo canal de voz que yo!")

  client.distube.stop(message)

  message.channel.send("✅ Desconectado del canal de voz.")

 }

} 