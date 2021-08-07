const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, emojiDelete) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(emojiDelete.guild.id)){
  logs_db.establecer(emojiDelete.guild.id, "no")
}  

const embed = new Discord.MessageEmbed()
.setTitle("<:menos_simbolo:841457055591301122> Emoji Eliminado")
.setDescription(`Nombre: **${emojiDelete.name}**\nID: **${emojiDelete.id}**`)
.setColor("RED")
.setTimestamp()

const logsid = await logs_db.obtener(emojiDelete.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}