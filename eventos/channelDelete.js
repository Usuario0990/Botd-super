const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, channelDelete) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(channelDelete.guild.id)){
  logs_db.establecer(channelDelete.guild.id, "no")
}

var tipo; 

if(channelDelete.type === "text"){
  tipo = "Texto"
}

if(channelDelete.type === "voice"){
  tipo = "Voz"
}

if(channelDelete.type === "news"){
  tipo = "Noticias/Anuncios"
}

const embed = new Discord.MessageEmbed()
.setTitle("<:menos_simbolo:841457055591301122> Canal Eliminado")
.setDescription(`Nombre: **${channelDelete.name}**\nCategoría: **${channelDelete.parent}**\nID: **${channelDelete.id}**\nTipo: **${tipo}**`)
.setColor("RED")
.setTimestamp()

const logsid = await logs_db.obtener(channelDelete.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}