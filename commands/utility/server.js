const { SlashCommandBuilder } = require('discord.js');
const name = 'server';
const description = 'Provides information about the server.';

const execute = async (interaction) => {
	await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName(name)
		.setDescription(description),
	execute,
};