const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json())

var nouns = require("./data/nouns.json");
var adjectives = require("./data/adjectives.json");

function saveListToFile(list, file) {
    list.sort();
    fs.writeFile(file, JSON.stringify(list, null, " "), "utf8", (err) => {
        if (err) {
            console.log("[!] error writing file");
        }
    });
}

function randomChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

app.get("/name", (req, res) => {
    var adj  = randomChoice(adjectives)
    var noun = randomChoice(nouns);

    res.send({ "name": adj + "-" + noun });
});

app.post("/adjective", (req, res) => {

    var adj = req.body.adjective
    if (adjectives.indexOf(adj) !== -1) {
        res.statusCode = 409;
        res.send("Error: Already exists");
        return;
    }
    adjectives.push(adj);
    saveListToFile(adjectives, "./data/adjectives.json");
    res.send(req.body);
});

app.post("/noun", (req, res) => {
    var noun = req.body.noun;
    if (nouns.indexOf(noun) !== -1) {
        res.statusCode = 409;
        res.send("Error: Already exists");
        return;
    }
    nouns.push(req.body.noun);
    saveListToFile(nouns, "./data/nouns.json");
    res.send(req.body);
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
