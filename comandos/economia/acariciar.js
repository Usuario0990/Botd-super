const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const used = new Map();
const Duration = require("humanize-duration");
const sleep = new Set()

module.exports = {
  name: "acariciar", 
  alias: ["caress"], 

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
    used.set(message.author.id, Date.now() + 1000 * 60 * 5);
    setTimeout(()=> used.delete(message.author.id),1000 * 60 * 5);
  } 

     if(sleep.has(message.author.id)) return message.channel.send("Shhhh!!! Tu mascota está durmiendo, no lo despiertes...")
     let user = message.author;
     const carino = new db.crearDB("carino")
     const mascota = new db.crearDB("mascota")
     const dinero = new db.crearDB("dinero")
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
     const ca1 = await carino.obtener(`${user.id}`) 
     if(mascotanum === "Ninguno") return message.channel.send("No tienes una mascota.")
     

     const embed = new Discord.MessageEmbed()
     .setDescription(`Awww!! ${user}, Has acariciado a tu mascota y ahora te aprecia más.`)
     .setColor("RANDOM")

     if(ca1 === 100){
       carino.establecer(`${user.id}`, 100)
     }

     message.channel.send(embed)
     carino.sumar(`${user.id}`, 10)

 }

} 