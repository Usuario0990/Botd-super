const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, oldMessage, newMessage) => {

  if(newMessage.author.bot) return;

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(newMessage.guild.id)){
  logs_db.establecer(newMessage.guild.id, "no")
}

const embed = new Discord.MessageEmbed()
.setTitle("🔄 Mensaje Editado")
.setDescription(`Antiguo Mensaje: **${oldMessage}**\nNuevo Mensaje: **${newMessage}**\nAutor: **${newMessage.author.tag}**\nCanal: <#${oldMessage.channel.id}>\nID: **${newMessage.id}**`)
.setColor("YELLOW")
.setTimestamp()

const logsid = await logs_db.obtener(newMessage.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}