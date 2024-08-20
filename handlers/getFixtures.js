const axios = require("axios");
const dateFormat = require("dateformat");
const leagues = require("../config/leagues");
const dummy = require("../data/dummy");
const today = dateFormat(new Date(), "yyyy-mm-dd");
require("dotenv").config();

module.exports = async () => {
  try {
    // list of requests to execute
    const requests = leagues.map((league) =>
      axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures", {
        headers: {
          "x-rapidapi-key": process.env.KEY,
        },
        params: {
          league: league.id,
          date: today,
          season: new Date().getFullYear(),
        },
      })
    );

    // execute all the requests
    const responses = await Promise.all(requests);

    /* const responses = dummy; */

    // collect all the responses data
    const data = responses.map((res, i) => ({
      league: leagues[i].name,
      games:
        res.data.response.length > 0
          ? res.data.response.map((game) => ({
              home: game.teams.home.name,
              away: game.teams.away.name,
            }))
          : null,
    }));

    console.dir(data, { depth: null });

    return data;
  } catch (err) {
    console.log("Error in retrieving fixtures...", err.message);
    throw err;
  }
};
