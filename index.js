const formatText = require("./handlers/formatText");
const getFixtures = require("./handlers/getFixtures");
const sendText = require("./handlers/sendText");

module.exports.handler = async function () {
  // retrieve fixtures
  const fixtures = await getFixtures();
  // get text
  const message = formatText(fixtures);
  // send text
  await sendText(message);
};
