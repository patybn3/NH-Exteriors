// this file holds the configuration of the command line server
// it allows to run a local server on the command line (terminal)
// to activate open your terminal, navigate to the root Directory
// (NH-Exteriors.github.io) and type npm start on the terminal
// server will update at any given changes on any file using nodemon
// page will reload every time a change is made
// this is to be used for local testing only
const express = require('express')
const http = require('http')
const reload = require('reload')
// const opn = require('opn')


const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('/', './')
app.use(express.static('./'))

app.get('/', (req, res) => res.render('index'))

// localhost 8080
const server = http.createServer(app)
server.listen(8080, function() {
  console.log('Listening to port 8080...')
})

// opn('http://localhost:8080')

reload(app)
