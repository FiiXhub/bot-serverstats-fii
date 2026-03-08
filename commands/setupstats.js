const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require("discord.js");
const updateStats = require("../utils/updateStats");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup-stats")
    .setDescription("Membuat channel server stats")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {

    await interaction.deferReply({ ephemeral: true });

    const guild = interaction.guild;

    const category = await guild.channels.create({
      name: "📊 SERVER STATS",
      type: ChannelType.GuildCategory
    });

    await guild.channels.create({
      name: `👥 Total`,
      type: ChannelType.GuildVoice,
      parent: category.id
    });

    await guild.channels.create({
      name: `👨 Man Total`,
      type: ChannelType.GuildVoice,
      parent: category.id
    });

    await guild.channels.create({
      name: `👩 Woman Total`,
      type: ChannelType.GuildVoice,
      parent: category.id
    });

    await guild.channels.create({
      name: `🤖 Bot-Fii Total`,
      type: ChannelType.GuildVoice,
      parent: category.id
    });

    await guild.channels.create({
      name: `🟢 Online`,
      type: ChannelType.GuildVoice,
      parent: category.id
    });

    await updateStats(guild);

    await interaction.editReply("✅ Server stats berhasil dibuat!");
  }
};
