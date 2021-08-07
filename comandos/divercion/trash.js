const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  name: "trash", 
  alias: ["basura"], 

async execute (client, message, args){

  if(!message.guild) return;

  let user = message.mentions.users.first() || message.author;

  const canvas = Canvas.createCanvas(558, 485);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://media.discordapp.net/attachments/830840975902376038/834624395351031909/basura.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(user.displayAvatarURL({ size: 1024, format: 'jpg' }));
	ctx.drawImage(avatar, 210, 150, 160, 160);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'trash-image.png');

  message.channel.send(attachment);

 }

} 