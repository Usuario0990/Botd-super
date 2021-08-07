const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "flipcoin", 
  alias: ["lanzarmoneda"], 

execute (client, message, args){

  const moneda = ["Cara", "Sello"]

  const random = moneda[Math.floor(Math.random() * moneda.length)]

  const embed = new Discord.MessageEmbed()
  .setTitle("Tirar moneda")
  .setDescription(`Ha salido: **${random}**`)
  .setColor("YELLOW")

  message.channel.send(embed)

 }

} 