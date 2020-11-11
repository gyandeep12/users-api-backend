const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Student = require("./models/students")
const cors = requrie("cors")
const port = 8000

// index page 
app.get("/", (req, res) => {
  res.send("Welcome To Users API")
})

// create new user 
app.post("/api/users", (req, res) => {
  res.send("Hello world")
})

// database connection
mongoose.connect("ENTER_MONGO_CONNECTION_URL", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected")
}).catch((err) => {
  console.log("An error occured: " + err)
})

// cors
app.use(cors())

app.listen(port, () => {
  console.log("Server is up and running on " + port)
})