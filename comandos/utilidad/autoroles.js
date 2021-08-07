const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "autoroles", 
  alias: ["autorol"], 

execute (client, message, args){

  if(message.author.id !== "693564975570092073") return message.channel.send("Este comando está en construcción!")

  var perms = message.member.hasPermission("MANAGE_CHANNELS")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  const id_autorol = new db.crearDB("id_autorol")

  if(id_autorol.tiene(message.guild.id)){
    return message.channel.send("Hey! Tu ya tienes un mensaje con autorol. Solo se puede hasta un rol.")
  }  

  let id = args[0]
  if(!id) return message.channel.send("Debes poner la ID del mensaje para el autorol!")
  if(isNaN(id)) return message.channel.send("Esa no es una ID válida!")

  let mensaje = message.channel.messages.resolveID(id)
  if(!mensaje) return message.channel.send("No hemos encontrado el mensaje! Por el sistema limitado, el mensaje de autoroles debe estar en este canal.")

  let emojiid = args[1]
  if(!emojiid) return message.channel.send("Debes poner la ID del emoji del autorol!")
  if(isNaN(emojiid)) return message.channel.send("Esa no es una ID de emoji válida!")

  let emoji = message.guild.emojis.cache.find(x => x.id === emojiid)
  if(!emoji) return message.channel.send("Ese emoji no se ha encontrado!")

  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send("Debes mencionar el rol que se dará!")

  let mensajeid = id

  let emjid = emojiid

  message.channel.messages.fetch(mensajeid).then(msg => {
    msg.react(emjid)
  })

  

  id_autorol.establecer(message.guild.id, id)

  const rol_autorol = new db.crearDB("rol_autorol")
   rol_autorol.establecer(message.guild.id, rol.id)

  const emoji_autorol = new db.crearDB("emoji_autorol")
  emoji_autorol.establecer(message.guild.id, emojiid)

  message.channel.send("Autoroles configurados correctamente!")

 }

} 