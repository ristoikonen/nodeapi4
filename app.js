const PORT = 8000; //process.env.PORT || 8000;

const express = require('express');

const app = express ();
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization');
    next(); 
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/todos', (req, res) => {
    res.send('Hello todos');
  });

