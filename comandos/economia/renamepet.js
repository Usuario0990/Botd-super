const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const used = new Map();
const Duration = require("humanize-duration");
const sleep = new Set()

module.exports = {
  name: "renamepet", 
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
  const mascota = new db.crearDB("mascota")
     const apodomas = new db.crearDB("apodomas")
     if(!mascota.tiene(`${user.id}`)){
       mascota.establecer(`${user.id}`, "Ninguno")
     }
     if(!apodomas.tiene(`${user.id}`)){
       apodomas.establecer(`${user.id}`, "Sin nombre")
     }
     const mascotanum = await mascota.obtener(`${user.id}`)
     const nombre = await apodomas.obtener(`${user.id}`)
     if(mascotanum === "Ninguno") return message.channel.send("No tienes una mascota.")
     if(!args.join(" ")) return message.channel.send("Debes escribir el nombre que le quieres poner a tu mascota.")
     apodomas.establecer(`${user.id}`, `${args.join(" ")}`)   
     message.channel.send(`${user} Has renombrado a tu ${mascotanum} como "${args.join(" ")}". ¡Hola ${args.join(" ")}! Si, ese es tu nuevo nombre :)`)

 }

} 