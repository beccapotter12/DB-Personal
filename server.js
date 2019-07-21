const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database/models/userDB')
const MongoStore = require('connect-mongo')(session)
const passport = require('./client/src/components/utilities/auth');
const app = express()
const PORT = 3001

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes= require("./routes");
app.use(routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});



//subscribe and authentication
