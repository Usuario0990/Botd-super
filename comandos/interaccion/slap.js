const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "slap", 
  alias: ["cachetada", "bofetada", "abofetear"], 

execute (client, message, args){

  let links = ["https://media1.tenor.com/images/f9f121a46229ea904209a07cae362b3e/tenor.gif?itemid=7859254", "https://i.pinimg.com/originals/2e/45/95/2e4595f035ad63ffae18e33a08f0012b.gif", "https://i.pinimg.com/originals/37/6b/b0/376bb0809abd6ea4cda434d144512cf0.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64cce7cf-29e3-4c82-a857-bd15692bceca/d521vyn-1d2a050c-a4d8-494f-956f-e88c9d65dcba.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0Y2NlN2NmLTI5ZTMtNGM4Mi1hODU3LWJkMTU2OTJiY2VjYVwvZDUyMXZ5bi0xZDJhMDUwYy1hNGQ4LTQ5NGYtOTU2Zi1lODhjOWQ2NWRjYmEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MkCOymIIT3FApjTk3C_5nu6p3Ber3jEYXRIdyESCe7U", "https://i.pinimg.com/originals/d8/0a/ee/d80aee6e3c909ccdf1ed7515c1bc4f91.gif", "https://pa1.narvii.com/6524/da106b569d1721e3e16dad0b33ed774864c5e695_hq.gif"]

  let mencionado = message.mentions.users.first()
  if(!mencionado) return message.channel.send("Debes mencionar a un usuario!")
  if(mencionado.id === message.author.id) return message.channel.send("No te puedes dar una cachetada o bofetada a ti mismo!")
  if(mencionado.id === "838914926679687207") return message.channel.send("Hey! No puedes hacer eso!")

  const imagen = links[Math.floor(Math.random() * links.length)]

  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} le ha dado una cachetada a ${mencionado.username}`)
  .setImage(imagen)
  .setColor("YELLOW")
  .setTimestamp()

  message.channel.send(embed)

 }

} 