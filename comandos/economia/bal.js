const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "bal", 
  alias: ["balance"], 

async execute (client, message, args){

  if(!message.guild) return;
  
    const dinero = new db.crearDB("dinero")
    const dinerobanco = new db.crearDB("dinerobanco")
    const user = message.mentions.users.first() || message.author;

    if(!dinero.tiene(`${user.id}`))
      dinero.establecer(`${user.id}`, 0)

    if(!dinerobanco.tiene(`${user.id}`))
      dinerobanco.establecer(`${user.id}`, 0)

      const dinerototal = await dinero.obtener(`${user.id}`)
      const dinerobancototal = await dinerobanco.obtener(`${user.id}`)
      const embed = new Discord.MessageEmbed()
      .setTitle(`**Dinero de ${user.tag}**`)
      .setDescription(`Dinero: <:Alfr_moneda:841452547130523658>**${dinerototal}**\n\nDinero en el banco: <:Alfr_moneda:841452547130523658>**${dinerobancototal}**\n\nDinero Total: <:Alfr_moneda:841452547130523658>**${dinerototal + dinerobancototal}**`)
      .setColor("RANDOM")

      message.channel.send(embed)      

 }

} 