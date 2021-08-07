const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, guild, user) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(guild.id)){
  logs_db.establecer(guild.id, "no")
}


const embed = new Discord.MessageEmbed()
.setTitle("Usuario Desbaneado")
.setDescription(`Usuario: ${user}\nID: **${user.id}**`)
.setThumbnail(user.displayAvatarURL({ size: 1024, dynamic: true }))
.setColor("BLUE")
.setTimestamp()

const logsid = await logs_db.obtener(guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)

  
}