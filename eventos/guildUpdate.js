const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, oldGuild, newGuild) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(newGuild.id)){
  logs_db.establecer(newGuild.id, "no")
}

const embed = new Discord.MessageEmbed()
.setTitle("🔄 Servidor Actualizado")
.setDescription(`Nombre antiguo: **${oldGuild.name}**\nNombre nuevo: **${newGuild.name}**\nID: **${newGuild.id}**`)
.setThumbnail(newGuild.iconURL({ size: 1024, dynamic: true }))
.setColor("YELLOW")
.setTimestamp()

const logsid = await logs_db.obtener(newGuild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}