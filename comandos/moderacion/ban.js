const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban", 
  alias: ["banear"], 

execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo suficientes permisos!")

  let user = message.mentions.members.first();

  if(!user) return message.channel.send("Menciona a un usuario!")

  if(user.id === message.author.id) return message.channel.send("No te puedes banear a ti mismo!")

  if(user.id === "861259381849194576"){
    return message.channel.send("Hey no! No puedes hacer eso conmigo!")
  }

  let razon = args.slice(1).join(" ");

  if(!razon) return message.channel.send("Debes colocar una razón!")

  if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0 ) return message.channel.send("No puede banear a una persona de igual o mayor rango que el tuyo.")

  message.guild.members.ban(user, {reason: razon});
  message.channel.send(`**${message.mentions.users.first().tag}** ha sido baneado por **${razon}** correctamente!`)
 }

} 