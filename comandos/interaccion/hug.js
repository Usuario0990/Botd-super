const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "hug", 
  alias: ["abrazar"], 

execute (client, message, args){

  let links = ["https://acegif.com/wp-content/uploads/anime-hug.gif", "https://cdn63.picsart.com/198502143004202.gif", "https://cdn.nekos.life/hug/hug_066.gif"]

  let mencionado = message.mentions.users.first()
  if(!mencionado) return message.channel.send("Debes mencionar a un usuario!")
  if(mencionado.id === message.author.id) return message.channel.send("No te puedes abrazar a ti mismo!")
  if(mencionado.id === "838914926679687207") return message.channel.send("Hey! No puedes hacer eso!")

  const imagen = links[Math.floor(Math.random() * links.length)]

  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} le ha dado un abrazo a ${mencionado.username}`)
  .setImage(imagen)
  .setColor("YELLOW")
  .setTimestamp()

  message.channel.send(embed)

 }

} 