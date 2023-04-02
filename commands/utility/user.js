const { SlashCommandBuilder } = require('discord.js');
const name = 'user';
const description = 'Provides information about the user.';

const execute = async (interaction) => {
	await interaction.reply(`This comands was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}`);
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName(name)
		.setDescription(description),
	execute,
};