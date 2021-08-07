const Discord = require("discord.js");
const db = require("megadb")
const prefix_db = new db.crearDB("prefix")
const moment = require("moment")

module.exports = async (client, message) => {

if(!message.guild) return;

let server = message.guild;

const afk = new db.crearDB("afk")

if(!afk.tiene(message.author.id)){
  afk.establecer(message.author.id, "no")
}

const siafk = await afk.obtener(message.author.id)

if(message.guild.id === siafk){
  const embedafk = new Discord.MessageEmbed()
  .setTitle("AFK")
  .setDescription(`${message.author} ha deshabilitado su AFK`)
  .setColor("BLUE")
  .setTimestamp()

  afk.establecer(message.author.id, "no")
  message.channel.send(embedafk)
}

let prefix;

if(prefix_db.tiene(server.id)) {
  prefix = await prefix_db.obtener(server.id)
} else {
  prefix = "c!"
}

let links = ["https://", "http://", "discord.gg", "www.", ".com"]
if(links.some(word => message.content.toLowerCase().includes(word))){
  const antilinks = new db.crearDB("antiliks")

  const server = message.guild;

  if(!antilinks.tiene(`${server.id}`)){
    antilinks.establecer(`${server.id}`, "off")
  }

  const al = await antilinks.obtener(`${server.id}`)

  if(al === "on"){
    setTimeout(function(){
     message.delete()
     message.channel.send("No puedes enviar enlaces o invitaciones!")
    }, 1000)

  
  }

  if(al === "off"){
    return;
  }
}



let badwords = ["mrd", "MRD", "ptm", "PTM", "tmr", "TMR", "puta", "puto", "hijo de puta", "hijos de puta", "hdp", "mierda", "tamare", "csm", "CSM", "rctm", "RCTM", "crj", "CRJ", "cgd", "CGD", "cagada", "pinga", "webon", "Carajo", "conchetumare", "conchatumare", "conchatumadre", "conchadetumadre", "concha tu madre", "concha de tu madre", "coño", "coño de tu madre", "verga", "que verga", "cabron", "cabrón", "kgon", "cagon", "cagón", "chupa pinga", "pinga", "me la pela", "pija", "pelotudo", "pinche", "pendejo", "no jodas", "jodas", "jodes", "imbécil", "imbecil", "cabrona", "gilipollas", "polla", "idiota", "hijo de su puta madre"]
if(badwords.some(word => message.content.toLowerCase().includes(word))){

  const antibw = new db.crearDB("antibw")

  if(!antibw.tiene(`${message.guild.id}`)){
    antibw.establecer(`${message.guild.id}`, "off")
  }

  const badword = await antibw.obtener(`${message.guild.id}`)

  if(badword === "on"){
    setTimeout(function(){
     message.delete()
     message.reply("No puedes decir malas palabras!")
    }, 1000)
  }

  if(badword === "off"){
    return;
  }
}

if(message.author.bot) return; 
if(!message.content.startsWith(prefix)) return;

let usuario = message.mentions.members.first() || message.member;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}

if(!cmd){
  if(message.content === (prefix)) return;
  const noexiste = new Discord.MessageEmbed()
  .setTitle("Oops! Creo que te has confundido...")
  .setDescription(`El comando **${command}** no existe.`)
  .setColor("RED")
  .setFooter("Para ver los comandos, escribe c!help.")
  .setTimestamp()

  message.channel.send(noexiste)
}
  
}