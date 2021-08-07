const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const sleep = new Set()

module.exports = {
  name: "sleeppet", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  if(sleep.has(message.author.id)) return message.channel.send("Tu mascota ya está durmiendo.")
     let user = message.author;
     const energia = new db.crearDB("energia")
     message.channel.send("Tu mascota se ha ido a descansar...")    
     sleep.add(message.author.id)
  setTimeout(function(){
    sleep.delete(message.author.id)
    energia.establecer(`${user.id}`, 100)
    user.send("Tu mascota ha terminado de dormir.")
  }, 600000)

 }

} 