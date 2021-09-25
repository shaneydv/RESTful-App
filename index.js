const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/tacos', (req, res)=>{
    res.send("Get /tacos sent");
  })
  
  app.post("/tacos", (req, res) => {
    const {meat, qty} = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
  })
  
  app.listen(3000, () => {
    console.log("Listening on port 3000")
  })