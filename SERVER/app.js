require ('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', require('./routers/UserRouter'))
app.use('/home', require('./routers/InventoryRouter'))
app.use('/cart', require('./routers/CartRouter'))
app.use('/gemini', require('./routers/GeminiRouter'))


app.listen(PORT , () => {
    console.clear()
    console.log(`Listening on port ${PORT}`)
})
module.exports = app