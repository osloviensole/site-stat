const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const { router } = require('./api/index')  // Vérifie que le fichier existe

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb', extended: true }))

console.log("Middleware initialized")

// Vérifie si le router est bien importé
if (!router) {
 console.error("Router not found! Check './api/index.js'");
 process.exit(1);  // Stoppe l'exécution si le router est absent
}

app.use('/', router)

app.listen(PORT, () => {
 console.log(`Server is running on port: ${PORT}`)
})
