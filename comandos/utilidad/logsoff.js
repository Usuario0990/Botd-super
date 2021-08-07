const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "logsoff", 
  alias: ["apagarlogs"], 

execute (client, message, args){

  var perms = message.member.hasPermission("MANAGE_CHANNELS")
  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  const logs_db = new db.crearDB("logs_db")

  logs_db.establecer(message.guild.id, "no")

  message.channel.send(`<a:check1:839254203032535080> Los logs han sido desactivados correctamente!`)

 }

} 