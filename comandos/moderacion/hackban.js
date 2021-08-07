const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "hackban", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo suficientes permisos!")

  const id = args.join(" ")

  if(!id) return message.channel.send("Debes colocar una ID!")
  if(id === "861259381849194576"){
    return message.channel.send("Hey no! No puedes hacer eso conmigo!")
  }
  
  const member = await client.users.fetch(id)
  message.guild.members.ban(member.id)

  message.channel.send(`El usuario **${member.username}** ha sido baneado correctamente!`)

 }

} 