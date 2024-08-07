const express = require('express')
// making a router
const router = express.Router()
// importing Lakey model to access database
const Lakey = require('../models/lakey')


// GET - Index
// localhost:3000/fruits
router.get('/', (req, res) => {
    // mongoose to find all fruits
    Lakey.find({})
    // return fruits as json
        .then(lakeys => {
            // res.json(fruit)
            res.render('lakeys/index', { lakeys })
        })
        .catch(err => {
            res.json(err)
        })
})




module.exports = router