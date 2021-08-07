const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const prefix_db = new db.crearDB("prefix")

module.exports = {
  name: "setprefix", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  let server = message.guild;

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos.")

  if(!args[0]) return message.channel.send("Debes poner un prefix nuevo.")

  server.owner.send(`Servidor **"${server.name}"**: El prefix ha sido cambiado a **${args[0]}**`).catch("error", (err) => message.channel.send("El dueño tiene los mensajes directos cerrados."))

  prefix_db.establecer(server.id, args[0]).catch("error", (err) => console.log("No se puede establecer el prefix."))

  message.channel.send(`<a:check1:839254203032535080> El prefix ha sido establecido a **${args[0]}**`)

 }

} 