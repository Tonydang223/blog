const express = require('express')
const app = express()
const port = 3000

app.get('/new', (req, res) => {
    console.log("jijiji~")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})