const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, oldChannel, newChannel) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(newChannel.guild.id)){
  logs_db.establecer(newChannel.guild.id, "no")
}

var tipo; 

if(newChannel.type === "text"){
  tipo = "Texto"
}

if(newChannel.type === "voice"){
  tipo = "Voz"
}

if(newChannel.type === "news"){
  tipo = "Noticias/Anuncios"
}

const embed = new Discord.MessageEmbed()
.setTitle("🔄 Canal Actualizado")
.setDescription(`Antiguo Nombre: **${oldChannel.name}**\nNuevo nombre: **${newChannel.name}**\nCategoría: **${newChannel.parent}**\nID: **${newChannel.id}**\nTipo: **${tipo}**`)
.setColor("YELLOW")
.setTimestamp()

const logsid = await logs_db.obtener(newChannel.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}