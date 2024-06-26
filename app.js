const express = require('express')
const app = express();
const cors = require('cors');
const routes = require('./routes')

app.use(cors())
app.use(express.json()) 
app.use(routes) 

app.listen(3030, () => {
    console.log('Executed on 3030 door')
})

