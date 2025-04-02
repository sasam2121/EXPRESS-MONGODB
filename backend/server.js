let express = require('express')
let colors = require('colors')
let dotenv = require('dotenv').config()
let {errorHandler} = require('./middleware/errorMiddleware')
let connectDB = require('./config/db')
let port = process.env.PORT || 5000


let app = express()


app.use(errorHandler)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


connectDB()

app.use('/api/goals', require('./routes/goalRoutes'))



app.listen(port, () => console.log(`server started on port ${port}`))