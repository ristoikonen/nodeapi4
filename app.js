const PORT = 8000; //process.env.PORT || 8000;

const express = require('express');

const app = express ();
app.use(express.json());

app.use((req,res,next)=>{
    //res.setHeader('Access-Control-Allow-Origin','*');
    //exit
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization');
    console.log("Use PORT:", PORT);
    next(); 
    
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

//   app.get('/todos', (req, res) => {
//     //res.send('Hello get World');
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ a: 1 }));
//     console.log('JSON');
//   });

  $.getJSON( "/todos", function(data) {
    console.log( "success" );
 }).done(function() {
    console.log( "second success" );
 })
 .fail(function() {
   console.log( "error" );
 })
 .always(function() {
    console.log( "complete" );
 });

  app.get('/', (req, res) => {
    res.send('root get World');
    console.log('root get World');
  });

  app.post('/todos', (req, res) => {
    res.send('Hello post todos');
  });

  // http://localhost:8000/todos/1

