const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, role) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(role.guild.id)){
  logs_db.establecer(role.guild.id, "no")
}


const embed = new Discord.MessageEmbed()
.setTitle("<:menos_simbolo:841457055591301122> Rol Eliminado")
.setDescription(`Nombre **${role.name}**\nID: **${role.id}**`)
.setColor("RED")
.setTimestamp()

const logsid = await logs_db.obtener(role.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}