const express = require('express')
const cors = require('cors');
const routes = require('./routes')

app.user(cors())
app.use(express.json()) 
app.use(routes) 


app.listen(3030, () => {
    console.log('Executed on 3030 door')
})

