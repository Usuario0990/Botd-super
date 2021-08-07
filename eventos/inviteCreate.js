const Discord = require("discord.js");
const db  = require("megadb")

module.exports = async (client, invite) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(invite.guild.id)){
  logs_db.establecer(invite.guild.id, "no")
}

const embed = new Discord.MessageEmbed()
.setTitle("<:mas_simbolo:841456871839105054> Invitación Creada")
.setDescription(`Invitador: ${invite.inviter}\nCódigo: **${invite.code}**\nUsos Máx.: **${invite.maxUses}**`)
.setColor("GREEN")
.setTimestamp()

const logsid = await logs_db.obtener(invite.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)
  
}