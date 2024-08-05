const express = require('express')

// Building our application and its required packages.
const app = require('liquid-express-views')(express())

// Putting the port to a variable.
const port = 3000

// Will write a confirmation message to the terminal that the server is running.
app.listen(port, () => {
    console.log(`Server up and running on port ${port}...`)
})