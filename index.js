const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("This is my first Programme In Node JS")
} )

app.listen(3000, ()=> console.log('Programme Is Listening'))
