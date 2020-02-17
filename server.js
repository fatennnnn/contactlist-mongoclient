const express=require('express')
const{MongoClient,ObjectID}=require ('mongodb')
const bodyParser=require('body-parser')
//if
const assert=require('assert')
const app=express()
app.use(bodyParser.json())

const mongo_url="mongodb://localhost:27017"
const database ="contact"
MongoClient.connect(mongo_url, { useUnifiedTopology: true } ,(err,client)=>{
    assert.equal(err,null,'data base connexion failed')
    const db = client.db(database)
    // app.post('/add_list',(req,res)=>{
    //     let newadd =req.body
    //     db.collection("list").insertOne(newadd,(err,data)=>{
    //         if (err) console.log("cant add")
    //         else res.send("new is addded")
    //     })
    // })

    app.post("/add_list",(req,res)=>{
        let newadd =req.body
        db.collection("lists").insertOne({...newadd}).then((data)=>res.send(data)).catch(err=>console.log("cant added"))
        // db.collection("lists").insertOne(newadd,(err,data)=>{
        //             if (err) console.log("cant add")
        //             else res.send("new is addded")
        //         })
    })

    //get all product
app.get('/get_list',(req,res)=>{
    db.collection('lists').find().toArray((err,data)=>{
    if (err)  res.send("can't fetch")
    else res.send(data)
})
 })
//get one product
app.get("/list/:id",(req,res)=>{
    let searchp=ObjectID(req.params.id)
    db
    db.collection("lists").findOne({_id : searchp},(err,data)=>{
        if (err)  res.send("can't fetch")
        else res.send(data)
    })
})
app.put("/modify_list/:id",(req,res)=>{
    let id=ObjectID(req.params.id)
    let modifiedProduct =req.body
    db.collection("lists").findOneAndUpdate({_id :id},{$set:{...modifiedProduct}},(err,data)=>{
        if(err) res.send("can't fetch")
        else res.send(data)
    }) 
})

app.delete("/delete_list/:id",(req,res)=>{
    let productToremove =ObjectID(req.params.id) 
    db.collection('lists').findOneAndDelete({_id:productToremove},(err,data)=>{
        if (err) res.send('cant send')
        else res.send("product delete")
    })
})

 })


app.listen(5000,(err)=>{
if (err) console.log("err")
else console.log("is runing on 5000")}
)
