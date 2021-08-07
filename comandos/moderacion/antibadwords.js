const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "antibadwords", 
  alias: ["antibw"], 

async execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("MANAGE_CHANNELS")

  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tengo los permisos suficientes para esta función!")
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No tengo los permisos suficientes para esta función!")

  const antibw = new db.crearDB("antibw")

  let accion = args[0]

  if(!antibw.tiene(`${message.guild.id}`)){
    antibw.establecer(`${message.guild.id}`, "off")
  }

  if(!accion){

    const sisabw = await antibw.obtener(`${message.guild.id}`)

    if(sisabw === "on"){
      message.channel.send("🟢 El Sistema Anti-malaspalabras está **Activado** 🟢\n\n**Para activarlo:** Poner a!antibadwords activar\n**Para desactivarlo:** Poner a!antibadwords desactivar")
    }

    if(sisabw === "off"){
      message.channel.send("🔴 El Sistema Anti-malaspalabras está **Desactivado** 🔴\n\n**Para activarlo:** Poner a!antibadwords activar\n**Para desactivarlo:** Poner a!antibadwords desactivar")
    }
  } else {
    if(accion === "activar"){
      antibw.establecer(`${message.guild.id}`, "on")
      message.channel.send("El sistema anti-malaspalabras ha sido activado correctamente!")
    }

    if(accion === "desactivar"){
      antibw.establecer(`${message.guild.id}`, "off")
      message.channel.send("El sistema anti-malaspalabras ha sido desactivado correctamente!")
    }
  }


 }

} 