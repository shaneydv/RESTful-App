const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const comments = [
    {
        id: 1,
        username: "Rahul",
        comment: "lol that is so funny!"
    },

    {
        id: 2,
        username: "Arnav",
        comment: "That is so cool!"
    },

    {
        id: 3,
        username: "Anupama",
        comment: "That's offensive."
    },

    {
        id: 4,
        username: "Riddhima",
        comment: "Yolo!!!"
    }

]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => { // Renders the form
    res.render('comments/new')
})

app.post('/comments', (req, res) => { // Form data is submitted here
    const {username, comment} = req.body;
    comments.push({username, comment})
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res)=> {
    const {id} = req.params;
    const comment = comments.find(c => c.id === parseInt(id))
    res.render('comments/show', { comment })
})

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