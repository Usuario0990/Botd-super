const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;

  let permisos = message.member.hasPermission("KICK_MEMBERS")    

const embed = new Discord.MessageEmbed() 
.setTitle("Error") 
.setDescription("No tienes permiso de kickear") 
if(!permisos) return message.channel.send(embed) 

let member = message.mentions.members.first() 

const embed2 = new Discord.MessageEmbed() 
.setTitle("Error") 
.setDescription("Menciona a un usuario")
if(!member) return message.channel.send(embed2)

if(member.id === message.author.id) return message.channel.send("No te puedes kickear a ti mismo!")

if(member.id === "861259381849194576"){
    return message.channel.send("Hey no! No puedes hacer eso conmigo!")
  }

  if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0 ) return message.channel.send("No puedes expulsar a una persona de igual o mayor rango que el tuyo.")

member.kick()

message.channel.send(`**${member.tag}** fue kickeado correctamente.`) 

 }

} 