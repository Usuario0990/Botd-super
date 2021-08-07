const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "with", 
  alias: ["withdraw"], 

async execute (client, message, args){

  if(!message.guild) return;

  const dinero = new db.crearDB("dinero")
  const dinerobanco = new db.crearDB("dinerobanco")
  const user = message.author;
  const cantidad = args[0]
  if(!cantidad) return message.channel.send("Debes escribir una cantidad!")
  if(isNaN(cantidad)) return message.channel.send("Debes poner una cantidad válida!")  

  if(!dinerobanco.tiene(user.id)){
    dinerobanco.establecer(user.id, 0)
  }

  const dinerobancot = await dinerobanco.obtener(`${user.id}`)

  if(dinerobancot < cantidad){
    return message.channel.send("No tienes tanto dinero en el banco!")
  }

  dinero.sumar(`${user.id}`, cantidad)
  dinerobanco.restar(`${user.id}`, cantidad)

  message.channel.send(`Has sacado <:Alfr_moneda:841452547130523658>**${cantidad}** monedas del banco.`)

 }

} 