import express from 'express';
import bodyParser from 'pody-parser';

let app = express()
let port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})