module.exports = async (guild) => {

  const members = await guild.members.fetch();

  const bots = members.filter(m => m.user.bot).size;
  const online = members.filter(m => m.presence?.status === "online").size;

  const manRole = guild.roles.cache.find(r => r.name === "Man");
  const womanRole = guild.roles.cache.find(r => r.name === "Woman");

  const man = manRole ? manRole.members.size : 0;
  const woman = womanRole ? womanRole.members.size : 0;

  const total = man + woman;

  guild.channels.cache.forEach(channel => {

    if(channel.name.startsWith("👥 Total"))
      channel.setName(`👥 Total: ${total}`);

    if(channel.name.startsWith("👨 Man Total"))
      channel.setName(`👨 Man Total: ${man}`);

    if(channel.name.startsWith("👩 Woman Total"))
      channel.setName(`👩 Woman Total: ${woman}`);

    if(channel.name.startsWith("🤖 Bot-Fii Total"))
      channel.setName(`🤖 Bot-Fii Total: ${bots}`);

    if(channel.name.startsWith("🟢 Online"))
      channel.setName(`🟢 Online: ${online}`);

  });

};
