const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "setlogs", 
  alias: [], 

execute (client, message, args){

  var perms = message.member.hasPermission("MANAGE_CHANNELS")
  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  const logs_db = new db.crearDB("logs_db")

  const canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes mencionar un canal!")

  if(canal.type === "voice") return message.channel.send("No se puede establecer los logs en un canal de voz!")

  const valido = message.guild.channels.resolve(canal.id)
  if(!valido) return message.channel.send("Ese canal no es de este servidor!")

  logs_db.establecer(message.guild.id, canal.id)

  message.channel.send(`Los logs han sido establecidos en el canal <#${canal.id}>`)

  

 }

} 