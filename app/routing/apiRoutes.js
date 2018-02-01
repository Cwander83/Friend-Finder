/*  Your apiRoutes.js file should contain two routes:

    ~A GET route with the url /api/friends. This will be used to display a 
JSON of all possible friends.

    ~A POST routes /api/friends. This will be used to handle incoming 
survey results. This route will also be used to handle the compatibility 
logic.*/

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // API GET Requests
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        // Determine the user's most compatible friend using the following as a guide:

        // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
        let user = req.body;
        let userScore = user["scores[]"];
        // // Converts the survey scores from str to int
        for (let i = 0; i < userScore.length; i++) {
            let scoreInt = parseInt(userScore[i]);
            userScore[i] = scoreInt;
        }

        friendsData.push(user);

        // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
        // Example:
        // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        // Total Difference: 2 + 1 + 2 = 5

        let match = 0;
        let maxDifference = 40;

        for (let i = 0; i < friendsData.length - 1; i++) {

            let totalDif = 0;

            for (let j = 0; j < friendsData[i].scores.length; j++) {
                // Remember to use the **absolute value** of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
                totalDif += Math.abs(friendsData[i].scores[j] - userScore[j]);
            }

            // The closest match will be the user with the least amount of difference.
            if (totalDif < maxDifference) {
                maxDifference = totalDif;
                match = i;
            } else if (i === 0) {
                match = i;
                maxDifference = totalDif;
            }
        }

        res.send(friendsData[match]);
    });

};