const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000,()=>{
    console.log("app run on port 3000")
});

// app.use(express.static("./public"))
app.use(bodyParser.urlencoded({}));
app.use(bodyParser.json());

// app.use("*",(req,res)=>{
//     res.send(req.method);
// })
let emails = [];
app.post("/",(req,res)=>{
    // res.send("ok");
    // console.log(req.query);
    console.log(req.body.email);
    emails.push(req.body.email);
    if(emails.indexOf(req.body.email)!= -1){
        res.send("already")
    } else res.send("created");
    
});

// let randNum = Math.round(Math.random() * 1000);
// let i = 0;

// app.get('/game/surr',(req,res)=>{
//     i = 0;
//     res.send(`${randNum}`);
// });

// app.get('/game/new',(req,res)=>{
//     i = 0;
//     randNum = Math.round(Math.random() * 1000);
//     res.send(`${randNum}`);
// });

// app.get('/game/:num',(req,res,next)=>{
//     // console.log(req.params);
//     const { num } = req.params;
//     i++;
//     if (num > randNum){
//         res.send("+1")
//     } else if(num < randNum){
//         res.send("-1")
//     } else {
//         res.send(`win, try ${i}`);
//     }
//     // res.send(`${randNum}`);
// });


// //0-1000 целое

// app.get('/2',(req,res,next)=>{
//     res.send("2");
// });
// app.get("*",(req,res,next)=>{
//     console.log(req);

//     res.sendFile(`${__dirname}/public/index.html`);

//     // ${__dirname}/public/index.html
// });