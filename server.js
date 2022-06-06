require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

// DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))