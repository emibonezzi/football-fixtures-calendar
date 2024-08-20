const formatText = require("./handlers/formatText");
const getFixtures = require("./handlers/getFixtures");

module.exports.handler = async function () {
  // retrieve fixtures
  const fixtures = await getFixtures();
  // get text
  const message = formatText(fixtures);
  console.log(message);
};

module.exports.handler();
