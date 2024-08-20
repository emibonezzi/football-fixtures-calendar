const axios = require("axios");
const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;
require("dotenv").config();

module.exports = async (message) => {
  await axios.post(url, {
    chat_id: process.env.GROUPCHAT,
    text: message,
  });
};
