const express = require('express')
require('dotenv').config();

const app = express()
app.use(express.json());
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
const port = 3000

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html>
<body>
<h1>The form element</h1>
<form action="/" method="POST">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
  `)
})


app.post('/', function(request, response){

const lang = process.env.lang;
console.log(lang); 
  console.log(request.body);
  if(lang == "it"){
    response.send("Benvenuto " + request.body.fname);
  }else if(lang == "en"){
    response.send("Welcome " + request.body.fname);
  }else if(lang == "bg"){
    response.send("Alura come ta stet " + request.body.fname);
  }else{
    response.send("Benvenuto " + request.body.fname);
  }
   
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})