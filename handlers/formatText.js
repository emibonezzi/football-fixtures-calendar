const { lastIndexOf } = require("../config/leagues");

module.exports = function (fixtures) {
  let str = "";
  for (let i = 0; i < fixtures.length; i++) {
    str += `⚽️ ${fixtures[i].league}\n\n`;

    if (fixtures[i].games.length > 0) {
      for (let z = 0; z < fixtures[i].games.length; z++) {
        if (z === fixtures[i].games.length - 1) {
          str += `${fixtures[i].games[z].time} ${fixtures[i].games[z].home} - ${fixtures[i].games[z].away}\n\n------------\n\n`;
        } else {
          str += `${fixtures[i].games[z].time} ${fixtures[i].games[z].home} - ${fixtures[i].games[z].away}\n`;
        }
      }
    } else {
      str += "No games today.";
    }
  }
  return str;
};
