const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "afk", 
  alias: [], 

execute (client, message, args){

  const afk = new db.crearDB("afk")

  if(!afk.tiene(message.author.id)){
    afk.establecer(message.author.id, "no")
  }

  const razon = args.join(" ")
  if(!razon) return message.channel.send("<a:equis1:839254207680348160> Debes colocar una razón para establecer tu AFK!")

  const embed = new Discord.MessageEmbed()
  .setTitle("AFK")
  .setDescription(`<a:check1:839254203032535080> ${message.author} ha establecido su AFK como "${razon}"`)
  .setColor("BLUE")
  .setFooter(`Hey ${message.author.username}! Si vuelves a hablar en este server, se deshabilitará tu AFK.`)
  .setTimestamp()

  afk.establecer(message.author.id, `${message.guild.id}`)

  message.channel.send(embed)


 }

} 