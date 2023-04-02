const { SlashCommandBuilder } = require('discord.js');
const name = 'ping';
const description = 'Replies with Pong!';

const execute = async (interaction) => {
	await interaction.reply('Pong!');
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName(name)
		.setDescription(description),
	execute,
};