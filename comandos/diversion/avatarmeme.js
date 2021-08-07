const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Canvas = require("canvas")

module.exports = {
  name: "avatarmeme", 
  alias: [], 

async execute (client, message, args){

  let user = message.mentions.users.first()

  if(!user) return message.channel.send("Debes mencionar a un usuario!")

  let texto = args.slice(1).join(" ")
  if(!texto) return message.channel.send("Debes poner el texto del meme!")
  if(texto.length > 20) return message.channel.send("Solo se permite hasta 10 caracteres!")

  const canvas = Canvas.createCanvas(800, 800)

  const ctx = canvas.getContext('2d')

  const avatar = user.displayAvatarURL({ size: 1024, format: 'jpg'})

  const background = await Canvas.loadImage(`https://api.memegen.link/images/custom/_/${texto}.png?background=${avatar}`);
       
	ctx.drawImage(background, 0, 0, 820, 820);  
  

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `avatarmeme-${user.username}.jpg`);

  message.channel.send(attachment)


 }

}
 