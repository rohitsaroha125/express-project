const mysql=require("mysql")
const express=require('express')
var path=require("path")

var app=express();

const bodyParser=require('body-parser')

var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'finance'
})

app.use(bodyParser.json())


app.get("/",function(req,res){
    res
    .status(200)
    .sendFile(path.join(__dirname,"./form.html"))
})


app.listen(1690,()=> console.log("express server running"))

app.post('/myaction',(res,req)=>{
    console.log(req)
    mysqlConnection.query("insert into test values ('','"+req.bodyParser.name+"','"+req.bodyParser.email+"','"+req.bodyparser.city+"','"+req.bodyParser.pincode+"')",
    function(err)
    {
        if(err)
        {
            throw err
        }
        else
        {
            console.log('added succesfully')
        }
    })
})