import express from "express"
import dotenv from "dotenv"
import connectDB from "./DB/db.js"
import cors from "cors"
import { ProjectModel } from "./Models/project.model.js"

dotenv.config()

const app = express()
const url = process.env.MONGO_URL
const PORT = process.env.PORT ||9000 

connectDB(url)

app.use(cors())
app.use(express.json())

app.get("/Project",(req,resp)=>{
    ProjectModel.find()
    .then(Project=>resp.json(Project))
    .catch((err)=>console.log(err))
})

app.post('/Project',(req,resp)=>{
    const {Name , Link , Img} = req.body 
    const Update = new ProjectModel({Name , Link , Img})
    Update.save().then((Project)=>resp.status(201).json(Project))
})

app.delete("/Project/:id",(req,resp)=>{
    ProjectModel.findByIdAndDelete(req.params.id)
    .then((Project)=>resp.json(Project))
    .catch((err)=>resp.status(501).json(err))
})

app.listen(PORT,()=>{
    console.log(`server is running on port || ${PORT}`)
})