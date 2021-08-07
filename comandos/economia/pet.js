const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const cooldown = new Set()

module.exports = {
  name: "pet", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return; 

  const user = message.author;

  const energia = new db.crearDB("energia")
     const carino = new db.crearDB("carino")
     const mascota = new db.crearDB("mascota")
     const apodomas = new db.crearDB("apodomas")
     if(!mascota.tiene(`${user.id}`)){
       mascota.establecer(`${user.id}`, "Ninguno")
     }
     if(!energia.tiene(`${user.id}`)){
       energia.establecer(`${user.id}`, "100")
     }
     if(!carino.tiene(`${user.id}`)){
       carino.establecer(`${user.id}`, "0")
     }
     if(!apodomas.tiene(`${user.id}`)){
       apodomas.establecer(`${user.id}`, "Sin nombre")
     }
     const energ1 = await energia.obtener(`${user.id}`)
     const ca1 = await carino.obtener(`${user.id}`)
     const mascotanum = await mascota.obtener(`${user.id}`)
     const nombre = await apodomas.obtener(`${user.id}`)
     if(mascotanum === "Ninguno") return message.channel.send("No tienes una mascota.")    
     const embed = new Discord.MessageEmbed()
     .setTitle(`Mascota de ${user.tag}`)
     .addField("Tipo:", `${mascotanum}`, true)
     .addField("Nombre", `${nombre}`, true)
     .addField("**Estadísticas**", "⇺------------------⇼-----------------⇻")
    .addField("Energía:", `<a:energia:839254206782767124> ${energ1}%`, true)
    .addField("Cariño: ", `<a:corazoncito:839254204924035092> ${ca1}%`, true)
     .setColor("RANDOM")

     message.channel.send(embed)
     cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 5000)

 }

} 