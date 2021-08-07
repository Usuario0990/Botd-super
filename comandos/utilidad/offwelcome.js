const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "offwelcome", 
  alias: [], 

execute (client, message, args){

  const welcome = new db.crearDB("welcome")

  welcome.establecer(`${message.guild.id}`, "no")

  message.channel.send("<a:check1:839254203032535080> Las bienvenidas fueron removidas correctamente!")

 }

} 