const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "setsugs", 
  alias: [], 

execute (client, message, args){

  var perms = message.member.hasPermission("MANAGE_CHANNELS")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  const canales_sugs = new db.crearDB("canales_sugs")

  if(!canales_sugs.tiene(message.guild.id)){
    canales_sugs.establecer(message.guild.id, "no")
  }

  const canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("<a:equis1:839254207680348160> Debes mencionar un canal!")

  const valido = message.guild.channels.resolve(canal.id)

  if(!valido) return message.channel.send("<a:equis1:839254207680348160> Ese canal no es de este servidor!")

  canales_sugs.establecer(message.guild.id, `${canal.id}`)
  message.channel.send(`<a:check1:839254203032535080> Sugerencias configuradas al canal <#${canal.id}> correctamente!`)  

 }

} 