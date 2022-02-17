const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.json({
      msg: 'Hello'
  })
})


app.post('/api', (req, res) => {
    res.json({
        msg: 'POST'
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})