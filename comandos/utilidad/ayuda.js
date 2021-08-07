const Discord = require('discord.js');
const client = new Discord.Client();
require('discord-reply');
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const prefix_db = new db.crearDB("prefix")

module.exports = {
  name: "help", 
  alias: ["ayuda"], 

async execute (client, message, args){

  if(!prefix_db.tiene(message.guild.id)){
    prefix_db.establecer(message.guild.id, "c!")    
  }
  const prefixserver = await prefix_db.obtener(message.guild.id)

  if(args[0] === "bienvenidas"){
    const bienvenidasembed = new Discord.MessageEmbed()
    .setTitle("Información de Bienvenidas Personalizadas")
    .setColor("YELLOW")
    .setDescription(`**Pasos:**\n\n**1. Configura las bienvenidas con:**\nc!setwelcome #canal-para-bienvenidas (Tipo) (Mensaje o URL)\nTipos: normal, embed e imagen.\n\n**Explicación de los tipos:**\n\n**1.- Normal**\nEl bot enviará un mensaje configurado, lo puedes personalizar y decorar.\n\n**2.- Embed**\nEl bot enviará un mensaje personalizado que tienen color y se ven más bonitos, se especificarán, miembro, nombre de servidor y contador de miembros.\n\n**3.- Imagen**\nEl bot enviará una imagen, en el cual, con el fondo personalizado que le pongas, aparecerá la foto del perfil del miembro y un texto que dice: ¡Bienvenido al Server!\n\n\n**2. Parámetros**\nPara decorar tu bienvenida utiliza:\n**{user}**\nMención al usuario.\n\n**{usertag}**\nObtén el tag del usuario\n\n**{server}**\nObtén el nombre del servidor.\n\n**{memberCount}**\nEl contador de miembros.\n\n**3. Verifica la bienvenida**\nAl invitar a un miembro, verifica que la bienvenida salió bien.`)
    .setFooter("Si las bienvenidas tuviesen un fallo, usar el comando c!reportbug, para reportar el error.")

    return message.lineReply(bienvenidasembed)
  }

    const embed2 = new Discord.MessageEmbed()
    .setTitle("⇺--------------------------AYUDA--------------------------⇻")
    .setDescription(`Bienvenido al apartado de ayuda de ChickBot! Aquí encontrarás todos los comandos clasificados en sus correspondientes apartados.\n\nReacciona en 🎉 para **Diversión**\n\nReacciona en 👍 para **Utilidad**\n\nReacciona en 💰 para **Economía**\n\nReacciona en 🛠️ para **Moderación**\n\nReacciona en 🤖 para **Bot**\n\nReacciona en 👋 para **Interacción**\n\n**Para regresar a la página principal, reacciona en** ◀️\n\n\nInfo:\n• **Prefix:** *${prefixserver}*\n• **Ping de la API:** *${client.ws.ping}ms*`)
    .setColor("RED")
    .setFooter(`Recordatorio: || Si hay algún bug, puedes reportarlo con ${prefixserver}reportbug.`)

    const embediversion = new Discord.MessageEmbed()
    .setTitle("ChickBot | Diversión 🎉")
    .setDescription(`**c!meme**\nObtén memes ya sea en video o en imagen.\n\n**c!trash**\nConviértete en una bolsa de basura\n\n**c!stonks**\nConviértete en el meme de stonks.\n\n**c!ppt**\nJuega piedra, papel o tijera con el bot.\n\n**c!petpet**\nConviértete en el meme de petpet.\n\n**c!avatarmeme**\nHaz un meme personalizado con la foto de perfil de alguien.\n\n**c!flipcoin**\nTira una moneda.\n\n**c!wasted**\nHaz un meme de wasted.\n\n**c!8ball**\nEl bot responde a tus preguntas.`)
    .setColor("YELLOW")
    .setTimestamp()

    const embedutilidad = new Discord.MessageEmbed()
    .setTitle("ChickBot | Utilidad 👍")
    .setDescription(`**c!avatar**\nMira tu avatar o el de alguien más.\n\n**c!ascii**\nConvierte un texto a tipo ASCII.\n\n**c!elegir**\nElegir una opción de todas las que hay.\n\n**c!covid19**\nMira la información de COVID-19 en cualquier país.\n\n**c!help**\nAyuda de ChickBot.\n\n**c!afk**\nEstablece tu AFK.\n\n**c!reminder**\nHaz que el bot te recuerde algo.\n\n**c!setmute**\nAsigna un rol para mutear y desmutear.\n\n**c!setlogs**\nEstablece un canal para los logs.\n\n**c!logsoff**\nDesactiva los logs.\n\n**c!giveaway**\nHaz un sorteo.\n\n**c!reroll**\nElige otro ganador de un sorteo.\n\n**c!edit**\nEdita un sorteo.\n\n**c!setsugs**\nEstablece un canal de sugerencias.\n\n**c!sugerencia**\nHaz una sugerencia a el servidor.\n\n**c!setwelcome**\nConfigura una bienvenida personalizada.\n\n**c!offwelcome**\nDesactiva las bienvenidas.`)
    .setColor("GREEN")
    .setTimestamp()


    const embedeconomia = new Discord.MessageEmbed()
    .setTitle("ChickBot | Economía 💰")
    .setDescription(`**c!work**\nTrabaja para ganar dinero.\n\n**c!bal**\nMira el dinero que tienes.\n\n**c!with**\nRetirar dinero del banco.\n\n**c!dep**\nDeposita dinero en el banco.\n\n**c!rob**\nRoba a alguien.\n\n**c!shop**\nVisitar la tienda del Sistema de Economía.\n\n**c!buy**\nCompra objetos de la tienda.\n\n**c!bag**\nMira tu mochila.\n\n**c!use**\nUsa los objetos que tienes.\n\n**c!eat**\nCome alimentos de tu mochila.\n\n**c!pet**\nVer a tu mascota.\n\n**c!pass**\nPasea a tu mascota\n\n**c!acariciar**\nAcaricia a tu mascota.\n\n**c!renamepet**\nRenombra a tu mascota.\n\n**c!sleeppet**\nHaz dormir a tu mascota.`)
    .setColor("YELLOW")
    .setTimestamp()

    const embedmoderacion = new Discord.MessageEmbed()
    .setTitle("ChickBot | Moderación 🛠️")
    .setDescription(`**c!kick**\nExpulsa a un usuario.\n\n**c!ban**\nBanea a un usuario.\n\n**c!hackban**\nBanea a un usuario por su ID.\n\n**c!unban**\nDesbanea a un usuario.\n\n**c!tempban**\nBanea temporalmente a un usuario por un tiempo establecido.\n\n**c!mute**\nMutea a un usuario.\n\n**c!unmute**\nDesmutea a un usuario.\n\n**c!tempmute**\nMutea a un usuario temporalmente por un tiempo establecido.\n\n**c!warn**\nAdvertir a un miembro.\n\n**c!unwarn**\nQuitar advertencias a un usuario.\n\n**c!warns**\nMira las warns de un usuario.\n\n**c!antibadwords**\nSistema de Anti-malaspalabras.\n\n**----------Antispam----------**\n\n**c!nuke**\nExplota un canal para evitar el spam.\n\n**c!antilinks**\nSistema de antilinks.\n\n**c!lock**\nBloquea un canal para el rol @everyone.\n\n**c!unlock**\nDesbloquea un canal para el rol @everyone.\n\n**c!clear**\nElimina mensajes por números.\n\n**c!raid**\nElimina canales de raid por su nombre.`)
    .setColor("RED")
    .setTimestamp()

    const embedbot = new Discord.MessageEmbed()
    .setTitle("ChickBot | Bot 🤖")
    .setDescription(`**c!botinfo**\nMira la información del bot.\n\n**c!test**\nComprueba que el bot esté en línea.\n\n**c!reportbug**\nReporta un bug al dueño del bot.\n\n**c!invite**\nInvitación del bot.\n\n**c!uptime**\nVisualiza el tiempo que el bot se mantuvo conectado.`)
    .setColor("BLUE")
    .setTimestamp()

    const embedbackups = new Discord.MessageEmbed()
    .setTitle("ChickBot | Copias de Seguridades/Backups 🔒")
    .setDescription(`**c!backup create**\nCrear una copia de seguridad de un server, se guardarán roles, canales, emojis e incluso los 10 últimos mensajes de cada canal.\n\n**c!backup load (ID)**\nCarga la copia de seguridad con la ID (NUNCA compartas tu ID con nadie).`)
    .setTimestamp()

    const embedmusica = new Discord.MessageEmbed()
    .setTitle("ChickBot | Música 🎵")
    .setDescription(`**c!play**\nReproduce una canción\n\n**c!stop**\nPonle stop a las canciones que se están reproduciendo.\n\n**c!pause**\nPonle pausa a una canción.\n\n**c!continue**\nContinua la canción pausada.\n\n**c!volume**\nSube o baja el volumen de una canción.\n\n**c!skip**\nSkipea una canción.\n\n**c!loop**\nRepite una canción o tu playlist.\n\n**c!disconnect**\nDesconecta al bot del canal de voz.\n\n**c!queue**\nMira la playlist de canciones.`)
    .setColor("PURPLE")
    .setFooter("Pronto se irán añadiendo más comandos de música...")
    .setTimestamp()

    const embedinteraccion = new Discord.MessageEmbed()
    .setTitle("ChickBot | Interacción 👋")
    .setDescription(`**c!hug**\nAbraza a alguien.\n\n**c!punch**\nGolpea a alguien.\n\n**c!slap**\nDale una bofetada o cachetada a alguien.`)
    .setColor("ORANGE")
    .setFooter("Pronto se irán añadiendo más comandos de interacción...")
    .setTimestamp()
    

    
     message.lineReply(embed2).then(msg => {

       msg.react("🎉")
       msg.react("👍")
       msg.react("💰")
       msg.react("🛠️")
       msg.react("🤖")
       msg.react("👋")
       msg.react("◀️")
       
       msg.awaitReactions((reaction, user) => {
         if(message.author.id !== user.id) return;
         if(reaction.emoji.name === "🎉"){
           reaction.users.remove(user.id)
           msg.edit(embediversion)           
         }

         if(reaction.emoji.name === "👍"){
           reaction.users.remove(user.id)
           msg.edit(embedutilidad)
         }

         if(reaction.emoji.name === "💰"){
           reaction.users.remove(user.id)
           msg.edit(embedeconomia)
         }

         if(reaction.emoji.name === "🛠️"){
           reaction.users.remove(user.id)
           msg.edit(embedmoderacion)
         }

         if(reaction.emoji.name === "🤖"){
           reaction.users.remove(user.id)
           msg.edit(embedbot)
         }

         if(reaction.emoji.name === "👋"){
           reaction.users.remove(user.id)
           msg.edit(embedinteraccion)
         }

         if(reaction.emoji.name === "◀️"){
           reaction.users.remove(user.id)
           msg.edit(embed2)
         }
       })
     })

 }

} 