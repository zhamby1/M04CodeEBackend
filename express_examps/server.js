//to set up a server for node we first import our express package
const express = require("express")
//morgan to log request and errors - middleware
const morgan = require("morgan")
//variable to start the server
const app = express()
const path = require('path')
app.use(morgan("dev"))
//url encode to false (I want to see the url req and its data)
app.use(express.urlencoded({extended: false}))

//serve static html files in a folder
app.use(express.static("public"))

//we often use data in express and not send full webpages..lets see an example of this
//lets send json to the front end
const user = {
    name: "Zach Hamby",
    username: "zhamby1"
}

//say you want to reject a user from your website if they do not match a certain username.  Middleware can check these things before passing them to another route

//we can use params to grab url params and check them against routes

app.param("username",(req,res,next,username) =>{
    //check to see if username matches
    if(username === "zhamby1"){
        req.user = {name: "Zach Hamby", username: username}
    }
    else{
        req.user = {name: "INVALID ACCESS", username: username}
    }

    next()
})

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public/hello.html'))
})


app.get("/jsontest", (req,res) =>{
    res.json(user)
})

//often we are responding to requests of a certain url and either sending data, or sending html with modifyied data

//create routes for api calls and requests
//a route is a URL with a HTTP method that is tied/bind to function
// Called for GET request to http://localhost:3000/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello, Express!</h1>");
 });
app.get("/goodbye", (req,res) =>{
    res.send("<h1>See ya</h1>")
})

//grab query parameters from the url
app.get("/queryex", (req,res) =>{
    const html =
    `<h1>Hello, ${req.query.name}!</h1>
    <p>You are ${req.query.age} years old.</p>`
    res.send(html)
})

//grab form data or data sent through form inputs
app.post("/add_backend", (req,res) =>{
    const html =
    `<h1>Hello, ${req.body.name}!</h1>
    <p>You are ${req.body.age} years old.</p>`
    res.send(html)
})

//we want to grab a single item from a list of items..or a single user from a list of users
//usually in apis /posts would mean all the posts in a db /posts/1 means the first post
//in others words, the number after /posts/* will change depending on the id we are looking for in our DB
//generate dynamic web pages - route parameters string near end of URL that specifices a data value
//grab a specific user from a list of users in a db
app.get("/users/:username", (req,res) =>{
    res.send("<h1>Profile for " + req.user.name + "</h1>")
 
})

//start the web server on a port
//ask the web server what port to use
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("listening")
})