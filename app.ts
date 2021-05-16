import express from 'express'

const app = express()
const PORT = 8080

app.get('/', (req, res, next) => {
  res.send({ title: "test", message: "hello, world!" })
})

app.listen(PORT, () => {
  console.log(`🚀Runnnign Server at http://localhost:${PORT}`)
})