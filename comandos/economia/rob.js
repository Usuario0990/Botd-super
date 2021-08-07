const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const used = new Map();
const Duration = require("humanize-duration");
const db = require("megadb")

module.exports = {
  name: "rob", 
  alias: ["robar"], 

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
    used.set(message.author.id, Date.now() + 1000 * 60 * 25);
    setTimeout(()=> used.delete(message.author.id),1000 * 60 * 25);
  }   
    const dinero = new db.crearDB("dinero")
    const user = message.author
    const persona = message.mentions.users.first()
    if(!persona) return message.channel.send("Debes mencionar a alguien!")

    let dineropersona = await dinero.obtener(`${persona.id}`)
    let dinerouser = await dinero.obtener(`${user.id}`)

    let dineroaleatorio = Math.floor(Math.random() * dineropersona) + 1    

    if(persona.id === message.author.id) return message.channel.send("No te puedes robar a ti mismo.")
    if(!isNaN(args[0])) return message.channel.send("Ese no es un usuario válido.")

    if(dineropersona < 200) return message.channel.send("Esa persona tiene muy poco dinero para robarle.")
    if(!dinero.tiene(`${persona.id}`)) return message.channel.send("Esta persona no tiene dinero.")

    let posibilidades = ["bien", "mal"]
    let posibilidadfinal = posibilidades[Math.floor(Math.random() * posibilidades.length)]

    if(posibilidadfinal === "bien"){

      if(!dinero.tiene(`${user.id}`)){
        dinero.establecer(`${user.id}`, 0)
      }

      dinero.restar(persona.id, dineroaleatorio)

      dinero.sumar(user.id, dineroaleatorio)      

      message.channel.send(`Has robado a **${persona.tag}** y has conseguido ganar <:Alfr_moneda:841452547130523658>${dineroaleatorio}.`)
    }

    if(posibilidadfinal === "mal"){

      if(!dinero.tiene(`${user.id}`)){
        dinero.establecer(`${user.id}`, 0)
      }

      const dinerocantidad = await dinero.obtener(`${user.id}`)
      if(dinerocantidad === 0){
        message.channel.send(`${user} Has intentado robar a **${persona.tag}** y tu robo resultó ser un fracaso, pero como no tienes dinero no has perdido nada.`)
      }

      if(dinerocantidad < dineroaleatorio){

      dinero.restar(user.id, dineroaleatorio)

      message.channel.send(`Oops! Has intentado robar a **${persona.tag}** y tu robo resultó ser un fracaso. Has perdido <:Alfr_moneda:841452547130523658>${dineroaleatorio} monedas.`)
      }
    }

 }

} 