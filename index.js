const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

//Express middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Home
app.get('/home', (req, res) => {
    return res.json({
        Home: "Homepage",
        otherPages: "Contact, About Us",
        Elements: "Header, Footer"
    })
})

//Movie
app.get('/movie', (req, res) => {
    return res.json([{
        Name: "3 Idiots",
        releaseYear: "2009",
        Director: "Rajkumar Hirani"
    },
    {
        Name: "PK",
        releaseYear: "2014",
        Director: "Rajkumar Hirani"
    },
    {
        Name: "Sultan",
        releaseYear: "2016",
        Director: "Ali Abbas Zafar"
    }
    ])
})

//Cricket
app.get('/cricket', (req, res) => {
    return res.json([
        {
            Team: "New Zealand",
            Captain: "Kane Williomson",
            testRanking: "1"
        },
        {
            Team: "India",
            Captain: "Virat Kohli",
            testRanking: "2"
        },
        {
            Team: "Australia",
            Captain: "Tim Paine",
            testRanking: "3"
        }
    ])
})

//Update get route
app.get('/update', (req, res) => {
    fs.readFile('reruiredFile.txt', 'utf-8', (err, data) => {
        if (err) {
            return res.send(
                "Not available, please update the file."
            )
        }
        res.send(data)
    })
})

//Update post route
app.post('/update', (req, res) => {
    const data = req.body.data
    fs.writeFile('reruiredFile.txt', data, (err) => {
        if (!err) {
            return res.send(data)
        }
    })
})

//404
app.get('*', (req, res) => {
    res.status(404).send("Page Not Found!!!")
})

//Server
app.listen(PORT, () => {
    console.log(`Server running succesfully at ${PORT}`)
})