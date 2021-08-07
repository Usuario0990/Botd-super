const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const used = new Map();
const Duration = require("humanize-duration");
const db = require("megadb")

module.exports = {
  name: "work", 
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
    used.set(message.author.id, Date.now() + 1000 * 60 * 60 * 2);
    setTimeout(()=> used.delete(message.author.id),1000 * 60 * 60 * 2);
  }
  
    const dinero = new db.crearDB("dinero")

    const user = message.author;

    if(!dinero.tiene(`${user.id}`))
      dinero.establecer(`${user.id}`, 0)

      let random = Math.floor(Math.random() * 175) + 100

      let trabajo = ["Policía", "Bombero", "Médico", "Salvavidas", "Profesor", "Administrador", "Diseñador Gráfico", "Programador", "Desarrollador de Bots", "Jardinero", "Científico", "Arquitecto", "Albañil", "Barbero", "Peluquero", "Productor de Cine", "Chef", "Reportero", "Piloto", "Trabajador de Limpieza", "Taxista"]
      let randomtrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]

      dinero.sumar(`${user.id}`, random)

      const embed = new Discord.MessageEmbed()
      .setTitle("Trabajo")
      .setDescription(`**${user}** ha trabajado de **${randomtrabajo}** y ganó <:Alfr_moneda:841452547130523658> ${random}`)
      .setColor("RANDOM")

      message.channel.send(embed)

 }

} 