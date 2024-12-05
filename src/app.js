const express = require('express');
const mongoose = require('mongoose');
const app = express();

// app.use(express.json()); 



app.use("/hello",
    (req,res)=>
        {res.send("hello piyush")
    });

app.use("/test",
    (req,res)=>
        {res.send("hello from the server")

        });

app.use("/",
    (req,res)=>   
        {res.send("hello ji")

        });

app.listen(7777,()=>{
    console.log('Server is successfully listing on port777')
})


