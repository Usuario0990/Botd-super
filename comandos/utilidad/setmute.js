const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "setmute", 
  alias: ["setmuterol"], 

execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  const muterol = new db.crearDB("muterol")

  if(!muterol.tiene(`${message.guild.id}`)){
    muterol.establecer(`${message.guild.id}`, "no")
  }

  let rolb = message.mentions.roles.first()
  if(!rolb) return message.channel.send("Debes mencionar un rol!")

  muterol.establecer(`${message.guild.id}`, `${rolb.id}`)
  message.channel.send(`El rol <@&${rolb.id}> ha sido establecido para mutear correctamente!`)

 }

} 