require ('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT , () => {
    console.clear()
    console.log(`Listening on port ${PORT}`)
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', require('./routers/UserRouter'))
module.exports = app