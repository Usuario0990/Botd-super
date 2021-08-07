const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "antilinks", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  const antilinks = new db.crearDB("antiliks")

  const server = message.guild;
  
  const accion = args[0]

  var perms = message.member.hasPermission("MANAGE_CHANNELS")

  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tengo los permisos suficientes para esta función!")
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No tengo los permisos suficientes para esta función!")

  if(!antilinks.tiene(`${server.id}`)){
    antilinks.establecer(`${server.id}`, "off")
  }

  const al = await antilinks.obtener(`${server.id}`)

  if(!accion){  

  if(al === "off"){
    message.channel.send("🔴 El Sistema de Antilinks está **Desactivado** 🔴")
  }

  if(al === "on"){
    message.channel.send("🟢 El Sistema de Antiliks está **Activado** 🟢")
  }

  } else {

  if(accion === "activar"){
    antilinks.establecer(`${server.id}`, "on")
    message.channel.send("El Sistema de Antilinks ha sido Activado")
  }

  if(accion === "desactivar"){
    antilinks.establecer(`${server.id}`, "off")
    message.channel.send("El sistema de Antilinks ha sido Desactivado")
  }
  
  }

 }

} 