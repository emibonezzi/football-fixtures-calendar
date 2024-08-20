const getFixtures = require("./handlers/getFixtures");

module.exports.handler = async function () {
  const fixtures = await getFixtures();
  console.log(fixtures);
};

module.exports.handler();
