const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, emojiCreate) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(emojiCreate.guild.id)){
  logs_db.establecer(emojiCreate.guild.id, "no")
}

if(emojiCreate.animated){
  const embedanimado = new Discord.MessageEmbed()
  .setTitle("<:mas_simbolo:841456871839105054> Emoji Creado")
  .setDescription(`Nombre: **${emojiCreate.name}**\nID: **${emojiCreate.id}**\nEmoji: <a:${emojiCreate.name}:${emojiCreate.id}>`)
  .setColor("GREEN")
  .setTimestamp()

  const logsid = await logs_db.obtener(emojiCreate.guild.id)

  if(logsid === "no") return;

  const id = logsid

  return client.channels.cache.get(id).send(embedanimado)
}

const embed = new Discord.MessageEmbed()
.setTitle("<:mas_simbolo:841456871839105054> Emoji Creado")
.setDescription(`Nombre: **${emojiCreate.name}**\nID: **${emojiCreate.id}**\nEmoji: <:${emojiCreate.name}:${emojiCreate.id}>`)
.setColor("GREEN")
.setTimestamp()

const logsid = await logs_db.obtener(emojiCreate.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}