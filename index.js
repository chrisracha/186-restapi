// Chris Samuel Salcedo
// 2022-05055
// CMSC 186
// A6: Creating a REST API

// to run: enter npm start OR node index.js

// importing express module
import express from 'express';

// set port variable
const PORT = 3000;

// initialize express app
const app = express()

// get area 
app.get('/area', (req, res) => {
    const {length, width} = req.query

    const l = parseFloat(length)
    const w = parseFloat(width)

    // return error 404 for invalid parameters (empty and negative)
    if (isNaN(l) || isNaN (w) || w < 0 || l < 0) {
        return res.status(400).json({error: "Invalid query parameters"})
    }

    const area = l * w;
    res.json({length: l, width: w, area})
})

// get perimeter
app.get('/perimeter', (req, res) => {
    const {length, width} = req.query

    const l = parseFloat(length)
    const w = parseFloat(width)

    // return error 404 for invalid parameters (empty and negative)
    if (isNaN(l) || isNaN (w) || w < 0 || l < 0) {
        return res.status(400).json({error: "Invalid query parameters"})
    }

    const perimeter = (2 * l) * (2 * w);
    res.json({length: l, width: w, perimeter})
})

// serve api
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})