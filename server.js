const express = require("express");
const cors = require('cors');

const app = express();

const books = [{
    id: 0,
    name: "Name 1",
    price: 100,
    author: "Author 1",
},
{
    id: 1,
    name: "Name 2",
    price: 200,
    author: "Author 2",
},
{
    id: 2,
    name: "Name 3",
    price: 150,
    author: "Author 3",
},
{
    id: 3,
    name: "Name 4",
    price: 50,
    author: "Author 4",
}];

app.use(cors());

app.get("/", (req, res) => {
    res.send(books);
})

app.listen(4000);
