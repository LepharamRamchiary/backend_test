const express = require("express")
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000;

const githubData = {
    "login": "kevwil",
    "id": 35,
    "node_id": "MDQ6VXNlcjM1",
    "avatar_url": "https://avatars.githubusercontent.com/u/35?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kevwil",
    "html_url": "https://github.com/kevwil",
    "followers_url": "https://api.github.com/users/kevwil/followers",
    "following_url": "https://api.github.com/users/kevwil/following{/other_user}",
    "gists_url": "https://api.github.com/users/kevwil/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kevwil/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kevwil/subscriptions",
    "organizations_url": "https://api.github.com/users/kevwil/orgs",
    "repos_url": "https://api.github.com/users/kevwil/repos",
    "events_url": "https://api.github.com/users/kevwil/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kevwil/received_events",
    "type": "User",
    "site_admin": false
}

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/twitter", (req, res) => {
    res.send("Hello From Twitter")
})

app.get("/login", (req, res) => {
    res.send("<h1>Pls login</h1>")
})

app.get("/github", (req, res) => {
    res.json(githubData);
})

app.listen(port, () => {
    console.log(`Server live on ${port}`);
})