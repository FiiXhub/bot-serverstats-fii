const updateStats = require("../utils/updateStats");

module.exports = {
  name: "guildMemberRemove",
  async execute(member) {
    await updateStats(member.guild);
  }
};
