const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    StudentID:String,
    StudentName:String,
    StudentClass:String,
    StudentEnrollmentDate: Date,
    StudentFeesStatus:String
})

const StudentModel = mongoose.model.Student || mongoose.model("Students",StudentSchema)

module.exports=StudentModel