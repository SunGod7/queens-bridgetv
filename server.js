const express = require('express')

// Building our application and its required packages.
// we're saving the return from the express function to a variable
// const app = express()
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
// This is a basic request logger, that can be used for debugging
// const reqLog = (req) => {
//     console.log('===========================')
//     console.log('This is the request object sent by the browser')
//     console.log(`${req.method} request sent to ${req.url}`)
//     console.log('req parameters are ', req.params)
//     console.log('===========================')
// }
// Putting the port to a variable.


// MIDDLEWARE

// It's piece of code that runs before a route is actually executed
// You can define for all routes, or for specific routes

// we set up middleware using app.use

// custom middleware that doesn't do anything
app.use((req, res, next) => {
    console.log('This will run for every route')
    next()
    // you HAVE to call next at the end of any piece of custom middleware
    // this what tells express "go to the next thing in the app"
})

// to get the information from our body, we need to use some middeleware
// express provides this for us

app.use(express.urlencoded({extended: false}))

// Add in middleware for static files
app.use(express.static('public'))
// the string we pass into express.static()
// tells express where to look for static files
// don't forget to create a public directory :)

// you'd also use for front end javascript and assets like images

app.use(methodOverride('_method'))
// this tells express that we'll use _method in a query string
// to override methods from our forms




// so we need to require them in order to use them here
const fruits = require('./models/fruits.js')

// HOME PAGE
app.get('/', (req, res) => {
    res.send('<a href="/fruits/">Show me the froots</a>')
})

// here, we're going to set up a basic route to see all my fruits
// INDEX ROUTE
app.get('/fruits/', (req, res) => {
    reqLog(req)
    // send the entire fruits array to this URL endpoint
    // res.send(fruits)
    // this sends an H1 as the view instead
    // res.send(`<h1>These are not the fruits you were looking for...</h1>`)
    res.render('index', { fruits: fruits })
})

const port = 3000

// Will write a confirmation message to the terminal that the server is running.
app.listen(port, () => {
    console.log(`Server up and running on port ${port}...`)
})