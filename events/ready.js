const updateStats = require("../utils/updateStats");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {

    console.log(`Logged in as ${client.user.tag}`);

    client.guilds.cache.forEach(guild => {
      updateStats(guild);
    });

  }
};
