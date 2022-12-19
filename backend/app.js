const express = require('express')
var mongoose = require('mongoose');
const app = express()
const port = 3334
const cors = require('cors')
const postapi = require("./route/route")
const bodyparse = require('body-parser')

mongoose.connect("mongodb+srv://viraj123:fullstack@cluster0.bfim7nl.mongodb.net/test");

app.use(express.json()) //json allow
app.use(express.urlencoded({ extended: true })) //json allow

app.use('/api', postapi);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

process.on('SIGINT', async function () {
    await mongoose.disconnect();
    process.exit(0)
});