const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, oldMember, newMember) => {

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(newMember.guild.id)){
  logs_db.establecer(newMember.guild.id, "no")
}

const logsid = await logs_db.obtener(newMember.guild.id)

if(logsid === "no") return;

const id = logsid

 

if(oldMember.discriminator !== newMember.discriminator){

  const embedtag = new Discord.MessageEmbed()
  .setTitle(`🔄 ${oldMember.username} actualizó su tag`)
  .setDescription(`Antiguo tag: **#${oldMember.discriminator}**\nNuevo tag: **#${newMember.discriminator}**`)
  .setColor("YELLOW")
  .setTimestamp()

  client.channels.cache.get(id).send(embedtag)

}

if(oldMember.username !== newMember.username){

  const embedn = new Discord.MessageEmbed()
  .setTitle(`<:actualizado_simbolo:841460400335093780> ${oldMember.username} actualizó su nombre`)
  .setDescription(`Antiguo nombre: **#${oldMember.username}**\nNuevo nombre: **#${newMember.username}**`)
  .setColor("YELLOW")
  .setTimestamp()

  client.channels.cache.get(id).send(embedn)
}
  
}