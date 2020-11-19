const express=require('express');
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000 ,()=>{
    console.log("server started at 3000");
});

app.get("/" , (req , res) =>{
    res.sendFile(__dirname + "/index.html");
});
app.post("/" , (req , res)=>{
    let n1=Number(req.body.num1);
    let n2=Number(req.body.num2);
    console.log(req.body);
    res.send("Addition is : " + (n1 + n2) );
});

app.get("/bmi" , (req , res) =>{
    res.sendFile(__dirname + "/bmi.html");
});
app.post("/bmi.html" , (req , res)=>{
    let n1=parseFloat(req.body.num1);
    let n2=parseFloat(req.body.num2);
    //console.log(req.body);
    res.send("BMI is : " + Math.floor(n1/(n2**2)) );
});