const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    const love = {name: 'sania', age:22, gender:'female'}
    res.send(love)
})

app.get('/love', (req, res)=>{
    // const love = {name: 'sania', age:22, gender:'female'}
    res.send("Love you Sania")
})

app.listen(4000, ()=> console.log('Port is Running'))
