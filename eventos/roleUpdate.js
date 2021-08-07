const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, oldRole, newRole) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(newRole.guild.id)){
  logs_db.establecer(newRole.guild.id, "no")
}

const embed = new Discord.MessageEmbed()
.setTitle("🔄 Rol Actualizado")
.setDescription(`Antiguo Nombre: **${oldRole.name}**\nAntiguo color (HEX): **${oldRole.hexColor}**\nNuevo nombre: **${newRole.name}**\nNuevo color (HEX): **${newRole.hexColor}**\nID: **${newRole.id}**`)
.setColor("YELLOW")
.setTimestamp()

const logsid = await logs_db.obtener(newRole.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}