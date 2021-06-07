const express = require("express");
const app = express();

var nouns = require("./data/nouns.json");
var adjectives = require("./data/adjectives.json");

function randomChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

app.get("/name", (req, res) => {
    var adj  = randomChoice(adjectives)
    var noun = randomChoice(nouns);

    res.send({ "name": adj + "-" + noun });
});

app.listen(3000, () => console.log("Listening on port 3000"))