const express = require('express')
const app = express()
const port = 3000;

let counter = 0
const seenIPs = []
//Variables 




//Middle function
function middle(req, res, next) {
  let IP = req.headers['x-forwarded-for']
  if (!IP in seenIPs) {
    console.log('IP:'+ IP)
    seenIPs.push(IP)   
    console.log('OS:' + req.headers['sec-ch-ua-platform'])
    counter++
    console.log('counter:' + counter)
  }
  next()
}


// Call and use the middleware
app.use(middle)


// Create an Express route for the '/' path that sends
// your 'page1.html' to requesters
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/page1.html")
})


// Create an Express route for the '/page2' path that sends
// your 'page2.html' to requesters
app.get('/page2', (req, res) => {
  res.sendFile(__dirname + "/page2.html")
})


// Don't edit below this line
app.listen(port)