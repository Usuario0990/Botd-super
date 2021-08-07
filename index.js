const Discord = require('discord.js');
const client = new Discord.Client();
require('discord-reply');
const disbut = require('discord-buttons')(client);
const { Client, MessageEmbed, Collection, Guild } = require('discord.js')
require('dotenv').config();
const keepAlive = require('./server.js');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://chickhukjhkiukkivbi20210503.mateomeva.repl.co/',
    title: 'Secundario',
    interval: 2 
});

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

const config = require("./config")
client.config = config 

const { GiveawaysManager } = require("discord-giveaways")
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 7000,
  default: {
    botsCanWin: false,
    exemptPermissions: [],
    reaction: "🎉" 
  }
})

//COMMAND HANDLER


const fs = require('fs');
let { readdirSync } = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

const diversioncommandFiles = fs.readdirSync('./comandos/diversion').filter(file => file.endsWith('.js'));

const utilidadcommandFiles = fs.readdirSync('./comandos/utilidad').filter(file => file.endsWith('.js'));

const moderacioncommandFiles = fs.readdirSync('./comandos/moderacion').filter(file => file.endsWith('.js'));

const musicacommandFiles = fs.readdirSync('./comandos/musica').filter(file => file.endsWith('.js'));

const botcommandFiles = fs.readdirSync('./comandos/bot').filter(file => file.endsWith('.js'));

const economiacommandFiles = fs.readdirSync('./comandos/economia').filter(file => file.endsWith('.js'));

const sorteoscommandFiles = fs.readdirSync('./comandos/sorteos').filter(file => file.endsWith('.js'));

const interaccioncommandFiles = fs.readdirSync('./comandos/interaccion').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

for (const file of musicacommandFiles) {
    const command = require(`./comandos/musica/${file}`);
    client.commands.set(command.name, command);
}

for (const file of diversioncommandFiles) {
    const command = require(`./comandos/diversion/${file}`);
    client.commands.set(command.name, command);
}

for (const file of utilidadcommandFiles) {
    const command = require(`./comandos/utilidad/${file}`);
    client.commands.set(command.name, command);
}

for (const file of moderacioncommandFiles) {
    const command = require(`./comandos/moderacion/${file}`);
    client.commands.set(command.name, command);
}

for (const file of botcommandFiles) {
    const command = require(`./comandos/bot/${file}`);
    client.commands.set(command.name, command);
}

for (const file of economiacommandFiles) {
    const command = require(`./comandos/economia/${file}`);
    client.commands.set(command.name, command);
}

for (const file of sorteoscommandFiles) {
    const command = require(`./comandos/sorteos/${file}`);
    client.commands.set(command.name, command);
}

for (const file of interaccioncommandFiles) {
    const command = require(`./comandos/interaccion/${file}`);
    client.commands.set(command.name, command);
}

//EVENT HANDLER

for(const file of readdirSync("./eventos")){
  if(file.endsWith(".js")){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}



const Distube = require("distube")

client.distube = new Distube(client, {
  emitNewSongonly: true,
  searchSongs: false,
  leaveOnStop: true,
  leaveOnFinish: false,
  leaveOnEmpty: true
});

client.distube.on("addList", (message, queue, playList) => message.lineReply(`Playlist: **${playList.name}**`))

client.distube.on("addSong", (message, queue, song) => {
  message.lineReply(`<a:check1:839254203032535080> Canción añadida: **${song.name}** - **${song.formattedDuration}**`)
})

client.distube.on("playSong", (message, queue, playsong) => {
  if(playsong.formattedDuration === "Live"){
    return message.channel.send("<a:equis1:839254207680348160> No se puede reproducir una canción en vivo!")
  }
  const playing = new Discord.MessageEmbed()
  .setTitle(`▶️ Reproduciendo ahora: ${playsong.name}`)
  .setThumbnail(playsong.thumbnail)
  .addField("Duración", `${playsong.formattedDuration}`, true)
  .addField("Vistas", `${playsong.views}`, true)
  .addField("Likes", `${playsong.likes}`, true)
  .addField("Dislikes", `${playsong.dislikes}`, true)
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send(playing)
})

client.distube.on('initQueue', async (queue) => {
  queue.autoplay = false;
  queue.volume = 100;
})

client.distube.on("playList", (message, queue, playlist) => {
  message.channel.send(`▶️ Reproduciendo playlist: **${playlist.name}**`)
})

client.distube.on("error", (message, error) => {
  message.channel.send("Ha ocurrido un error")
})


client.on("messageReactionAdd", async (reaction, user) => {  
  const servidor = reaction.message.guild
  const mensaje = reaction.message
  const canal = reaction.message.channel
  const miembro = await servidor.members.cache.get(user.id)

if(servidor.id === "852531635252494346" && canal.id === "870000514266452078" && mensaje.id === "870063712189448212"){
    if(miembro.user.bot) return;
    if(reaction.emoji.name !== "✅"){
      return reaction.users.remove(user.id)
    }
    reaction.users.remove(user.id)
    miembro.roles.add("869989476015951912")
    const Canvas = require("canvas");

    const canvas = Canvas.createCanvas(1018, 468);
	const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://i.imgur.com/CejMjOA.jpeg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
	ctx.arc(247, 238, 175, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

  const imagen = await Canvas.loadImage(miembro.user.displayAvatarURL({ size: 1024, format: "jpg"}));
  ctx.drawImage(imagen, 72, 63, 350, 350);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'tarjeta-verificar.png');

    client.channels.cache.get("852531635252494349").send(`<@${user.id}>, Has sido verificado correctamente!`, attachment)

  }
  });

//DB

const mongoose = require('mongoose'); 

mongoose.connect(process.env.MONGODB, { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db => console.log('Conectado a MongoDB'))
.catch(err => console.error(err))

client.login(ODcyOTYwODM0NjA1ODQyNDUy.YQxeIQ.QvGJfEkDNra1gJKtJupfNZJH2oQ)