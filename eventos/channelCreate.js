const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, channelCreate) => {

if(channelCreate.type === "md") return;  

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(channelCreate.guild.id)){
  logs_db.establecer(channelCreate.guild.id, "no")
}

var tipo; 

if(channelCreate.type === "text"){
  tipo = "Texto"
}

if(channelCreate.type === "voice"){
  tipo = "Voz"
}

if(channelCreate.type === "news"){
  tipo = "Noticias/Anuncios"
}

const embed = new Discord.MessageEmbed()
.setTitle("<:mas_simbolo:841456871839105054> Canal creado")
.setDescription(`Nombre: ${channelCreate.name}\nCategoría: **${channelCreate.parent}**\nID: **${channelCreate.id}**\nTipo: **${tipo}**`)
.setColor("GREEN")
.setTimestamp()

const logsid = await logs_db.obtener(channelCreate.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}