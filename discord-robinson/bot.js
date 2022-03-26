const dotenv = require('dotenv');
dotenv.config();

const Discord = require("discord.js");
const client = new Discord.Client({
   intents: [
     Discord.Intents.FLAGS.GUILDS,
     Discord.Intents.FLAGS.GUILD_MESSAGES,
     Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ] 
  });
const { REST } = require("@discordjs/rest");
const { Routes } = require("@discord-api-types/v9");
const fs = require("fs");
const { Player } = require("discord-player");
const LOAD_SLASH = proces.env.argv[2] == "load";

client.on("ready", () => {
  console.log(`Bot foi iniciado \nRobinson está contente`);
})

client.on("messageCreate", (message) => {
  if (message.content === 'robinson') {
    message.reply({
      content: "presente",
    })
  }
})

client.login(process.env.TOKEN);
