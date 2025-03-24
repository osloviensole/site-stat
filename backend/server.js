require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const user = require('./handlers/user/index')
const proxy = require('./handlers/proxy')
const path = require('path')


const port = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'))
// app.get('/', (req, res) => res.send('hello world'))
app.use('/api/auth', routes.auth)
app.use('/api/user', user.router)
app.use('/api/poll', routes.poll)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, console.log(`Server is running on ${port}`))

const proxyServer = express()

proxyServer.use(cors())
proxyServer.use(express.json());
proxyServer.use(express.urlencoded({ extended: true }));

proxyServer.all('*', proxy.proxy)

proxyServer.listen(8080, console.log(`Proxy Server is running on ${8080}`))
