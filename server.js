// import dependencies
/////////////////////////////////
// this allows us to load our env variables
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const lakeyRoutes = require('./controller/lakey_routes')
const userRoutes = require('./controller/user_routes')
const commentRoutes = require('./controller/comment_routes')


// Building our application and its required packages.
// we're saving the return from the express function to a variable
// const app = express()
const app = require('liquid-express-views')(express())

.


// MIDDLEWARE
// this is for request logging
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
// parses urlencoded request bodies
app.use(express.urlencoded({ extended: false }))
// to serve files from public statically
app.use(express.static('public'))
// bring in our session middleware
const session = require('express-session')

const MongoStore = require('connect-mongo')


// here's the middleware that sets up our sessions
app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)



Routes
////////////////////////////////////////////
app.use('/lakeys', lakeyRoutes)
app.use('/users', userRoutes)
app.use('/comments', commentRoutes)




app.get('/', (req, res) => {
	// res.send('your server is running, better go catch it')
	res.redirect('/lakeys')
})

////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})
