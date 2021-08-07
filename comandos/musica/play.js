const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const distube = require("distube")

module.exports = {
  name: "play", 
  alias: ["p"], 

execute (client, message, args){

  const song = args.join(" ")
  if(!song) return message.channel.send("<a:equis1:839254207680348160> Debes escribir una canción o URL!")

  if(!message.member.voice.channel) return message.channel.send("<a:equis1:839254207680348160> Debes estar en un canal de voz!")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo!")

  client.distube.play(message, song)

}
 

} 