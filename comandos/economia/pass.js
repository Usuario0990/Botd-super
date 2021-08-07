const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const used = new Map();
const Duration = require("humanize-duration");
const sleep = new Set()

module.exports = {
  name: "pass", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;
  const cooldown = used.get(message.author.id);

  if(cooldown) {
   const remaining = Duration(cooldown - Date.now(), { units: ['h','m','s'], language: 'es', conjunction: ' y ', serialComma: false, round: true});
  
   return message.channel.send(`Necesitas esperar ${remaining} para volver a usar este comando.`).then(async(msg) => {
        setTimeout(() => {
        msg.delete();
      }, 5000)
      });  
  
   }
  else{
    used.set(message.author.id, Date.now() + 1000 * 60 * 60 * 1);
    setTimeout(()=> used.delete(message.author.id),1000 * 60 * 60 * 1);
  } 
     if(sleep.has(message.author.id)) return message.channel.send("Shhhh!!! Tu mascota está durmiendo, no lo despiertes...")
     let user = message.author;
     const energia = new db.crearDB("energia")
     const mascota = new db.crearDB("mascota")
     const dinero = new db.crearDB("dinero")
     const carino = new db.crearDB("carino")
     if(!dinero.tiene(`${user.id}`)){
       dinero.establecer(`${user.id}`, "0")
     }
     if(!mascota.tiene(`${user.id}`)){
       mascota.establecer(`${user.id}`, "Ninguno")
     }
      if(!carino.tiene(`${user.id}`)){
       carino.establecer(`${user.id}`, "0")
     }
     const mascotanum = await mascota.obtener(`${user.id}`)
     const energ1 = await energia.obtener(`${user.id}`) 
     if(mascotanum === "Ninguno") return message.channel.send("No tienes una mascota.")
     if(energ1 === 0) return mesage.channel.send("Tu mascota está sin energía, necesita descansar un poco...")   
     let dineroaleatorio = Math.floor(Math.random() * 175) + 100

     const embed = new Discord.MessageEmbed()
     .setTitle("Pasear")
     .setDescription(`${user} Has sacado a tu mascota a pasear y has recibido como recompensa <:Alfr_moneda:841452547130523658> ${dineroaleatorio}`)
     .setColor("RANDOM")
     .setTimestamp()
     message.channel.send(embed)
     dinero.sumar(`${user.id}`, dineroaleatorio)
     energia.restar(`${user.id}`, 10)

 }

} 