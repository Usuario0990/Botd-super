const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, oldEmoji, newEmoji) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(newEmoji.guild.id)){
  logs_db.establecer(newEmoji.guild.id, "no")
}

if(newEmoji.animated){
  const embedanimado = new Discord.MessageEmbed()
  .setTitle("🔄 Emoji Actualizado")
  .setDescription(`Antiguo Nombre: **${oldEmoji.name}**\nNuevo nombre: **${newEmoji.name}**\nID: **${newEmoji.id}**\nEmoji: <a:${newEmoji.name}:${newEmoji.id}>`)
  .setColor("YELLOW")
  .setTimestamp()

  const logsid = await logs_db.obtener(newEmoji.guild.id)

  if(logsid === "no") return;

  const id = logsid

  return client.channels.cache.get(id).send(embedanimado)
}

const embed = new Discord.MessageEmbed()
.setTitle("🔄 Emoji Actualizado")
.setDescription(`Antiguo Nombre: **${oldEmoji.name}**\nNuevo nombre: **${newEmoji.name}**\nID: **${newEmoji.id}**\nEmoji: <:${newEmoji.name}:${newEmoji.id}>`)
.setColor("YELLOW")
.setTimestamp()

const logsid = await logs_db.obtener(newEmoji.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}