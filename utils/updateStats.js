module.exports = async (guild) => {

  const members = await guild.members.fetch();

  const bots = members.filter(m => m.user.bot).size;

  const online = members.filter(
    m => m.presence && m.presence.status !== "offline"
  ).size;

  const manRole = guild.roles.cache.find(r => r.name === "Man");
  const womanRole = guild.roles.cache.find(r => r.name === "Woman");

  const man = manRole ? manRole.members.size : 0;
  const woman = womanRole ? womanRole.members.size : 0;

  const total = man + woman;

  for (const channel of guild.channels.cache.values()) {

    try {

      if (channel.name.startsWith("👥 Total"))
        await channel.setName(`👥 Total: ${total}`);

      if (channel.name.startsWith("👨 Man Total"))
        await channel.setName(`👨 Man Total: ${man}`);

      if (channel.name.startsWith("👩 Woman Total"))
        await channel.setName(`👩 Woman Total: ${woman}`);

      if (channel.name.startsWith("🤖 Bot-Fii Total"))
        await channel.setName(`🤖 Bot-Fii Total: ${bots}`);

      if (channel.name.startsWith("🟢 Online"))
        await channel.setName(`🟢 Online: ${online}`);

    } catch (err) {
      console.log("Stats update error:", err.message);
    }

  }

};
