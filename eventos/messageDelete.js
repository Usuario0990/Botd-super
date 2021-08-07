const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, message, messageDelete) => {

if(message.author.id === "861259381849194576") return;

const logs_db = new db.crearDB("logs_db")

if(!logs_db.tiene(message.guild.id)){
  logs_db.establecer(message.guild.id, "no")
}

let con = ["prg!confesar", "prg!confess"]
if(con.some(word => message.content.toLowerCase().includes(word))){
  return;
}

const embed = new Discord.MessageEmbed()
.setTitle("<:menos_simbolo:841457055591301122> Mensaje Eliminado")
.setDescription(`Mensaje: **${message.content}**\nAutor: **${message.author.tag}**\nCanal: <#${message.channel.id}>\nID: **${message.id}**`)
.setColor("RED")
.setTimestamp()

const logsid = await logs_db.obtener(message.guild.id)

if(logsid === "no") return;

const id = logsid

client.channels.cache.get(id).send(embed)


client.snipes = new Map();

client.snipes.set(message.channel.id, {
      content: message.content,
      delete: message.author,
      canal: message.channel
    });  


}