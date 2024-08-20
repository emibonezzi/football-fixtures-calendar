const getFixtures = require("./handlers/getFixtures");

module.exports.handler = async function () {
  // retrieve fixtures
  const fixtures = await getFixtures();
  //
};

module.exports.handler();
