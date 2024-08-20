const axios = require("axios");
const dateFormat = require("dateformat");
const leagues = require("../config/leagues");
const today = dateFormat(new Date(), "yyyy-mm-dd");

module.exports = async () => {
  try {
    // list of requests to execute
    const requests = leagues.map((league) =>
      axios.get("https://api-football-v1.p.rapidapi.com/v3/fixtures", {
        headers: {
          "x-rapidapi-key":
            "99cb0c8439msh4957fa5de5a47bdp1cdb5ajsn72177231ca1e",
        },
        params: {
          league: league.id,
          date: today,
        },
      })
    );

    // execute all the requests
    const responses = await Promise.all(requests);

    // collect all the responses data
    const data = responses.map((response) => response.data);

    return data;
  } catch (err) {
    console.log("Error in retrieving fixtures...", err.message);
    throw err;
  }
};
