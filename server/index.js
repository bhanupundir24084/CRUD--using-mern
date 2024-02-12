
const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config();
const StudentModel = require('./models/student')
// if we use json
app.use(express.json())
app.use(cors())


// import mongo uri for .env file
const MONGO_URI = process.env.MONGO_URI;


// connect with mongodb
const connectToMongo=async ()=>{    // 
    try{
        await mongoose.connect(`${MONGO_URI}`)
        console.log('connected')
    }catch(error){
        console.log("error : "+error)
    }
}
connectToMongo();

// home
app.get('/', (req, res) => {
    res.send('home page')  
})


// Create Record
app.post("/create",async(req,res)=>{
    // get student details
    const {StudentID,StudentName,StudentClass,StudentEnrollmentDate,StudentFeesStatus} = req.body
    
    if( !StudentID || !StudentName || !StudentClass || !StudentEnrollmentDate || !StudentFeesStatus){
        res.json({ Status:false,result:"field cannot be empty"})
    }else{
        try{
            const resp =  await StudentModel.insertMany({StudentID,StudentName,StudentClass,StudentEnrollmentDate,StudentFeesStatus})    
            if(resp){
                res.json({Status:true,result:"inserted successfully"})
            }else{
                res.json({Status:false,result:"insertion failed"})
            }
        }catch(error){
            res.json({Status:false,result:"Internal server error!"})
        }
    }
})


// get all records
app.get('/display',async (req,res)=>{    
    try{
        const resp = await StudentModel.find().sort({"_id":-1});
        res.json(resp)    
    }catch(error){
        res.json({result:"Internal server error!"})
    }
})

// Delete Record by id if exist
app.delete('/delete',async(req,res)=>{
    const {_id} = req.body        
    try{
        const resp = await StudentModel.findOneAndDelete({_id})
        if(resp){
            res.json({Status:true,result:"delete successfully"})
        }else{
            res.json({Status:false,result:"delete failed"})
        }
    }catch(error){
        res.json({Status:false,result:"Internal server error!"})
    }
})

// update record by id
app.put('/update',async (req,res)=>{
    const{_id, StudentData} =req.body;        
    const {StudentID,StudentName,StudentClass,StudentEnrollmentDate,StudentFeesStatus} = StudentData;
    try {
        const resp = await StudentModel.findOneAndUpdate({_id},{StudentID,StudentName,StudentClass,StudentEnrollmentDate,StudentFeesStatus})
    if(resp){
        res.json({Status:true,result:"updated Successfully"})
    }else{
        res.json({Status:false,result:"update failed"})
    }
    } catch (error) {
        res.json({Status:false,result:"Internal server error!"})
    }    
})

// notification
app.get('/get-notifications',async (req,res)=>{
    try{
        const resp = await StudentModel.find({StudentFeesStatus:"FeesNotPaid"});
        res.json({Status:true,result:resp});
    }catch(error){
        res.json({Status:false,result:"Internal server error!"})
    }
}) 



// get student data by id

app.post('/get-single-data',async(req,res)=>{
    const {_id} = req.body;
    try{
        const resp = await StudentModel.findById(_id);
        if(resp){
            res.json({Status:true,result:resp})
        }else{
            res.json({Status:false,result:"id not found"})
        }
    }catch(error){
        res.json({Status:false,result:"Internal server error!"})
    }    
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
