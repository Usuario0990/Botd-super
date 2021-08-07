const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "dep", 
  alias: ["deposit"], 

async execute (client, message, args){

  if(!message.guild) return;

  const dinero = new db.crearDB("dinero")
  const dinerobanco = new db.crearDB("dinerobanco")
  const user = message.author;

  const cantidad = args[0]
  if(!cantidad) return message.channel.send("Debes escribir una cantidad!")
  if(!dinero.tiene(`${user.id}`)){
    dinero.establecer(`${user.id}`, 0)
  }
  const dinerocantidad = await dinero.obtener(`${user.id}`)

  if(dinerocantidad === 0) return message.channel.send("No tienes suficiente dinero.")
  if(!dinerobanco.tiene(`${user.id}`)){
    dinerobanco.establecer(`${user.id}`, 0)
  }

  if(cantidad === "all"){
    const dinerototal = await dinero.obtener(`${user.id}`)

    dinero.restar(`${user.id}`, dinerototal)

    dinerobanco.sumar(`${user.id}`, dinerototal)

    message.channel.send(`Has guardado <:Alfr_moneda:841452547130523658>**${dinerototal}** monedas en el banco.`)
  }
  const dinerot = await dinero.obtener(`${user.id}`)

  if(cantidad > dinerot) return message.channel.send("No tienes monedas suficientes.")

  dinero.restar(`${user.id}`, cantidad)
  dinerobanco.sumar(`${user.id}`, cantidad)

  message.channel.send(`Has guardado <:Alfr_moneda:841452547130523658>**${cantidad}** monedas en el banco.`)

 }

}