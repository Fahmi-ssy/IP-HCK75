require ('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', require('./routers/UserRouter'))
app.use('/home', require('./routers/InventoryRouter'))
module.exports = app

app.listen(PORT , () => {
    console.clear()
    console.log(`Listening on port ${PORT}`)
})