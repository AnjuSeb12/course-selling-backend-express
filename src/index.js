
const express = require('express')
const connectionDb=require("../config/db")


const userRouter=require('../routes/user/index')
const app = express()
const port = 3000
app.use(express.json())


app.use("/api/v1",userRouter);
connectionDb();






app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})