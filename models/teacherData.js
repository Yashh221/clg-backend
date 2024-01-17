import mongoose from "mongoose"
const schema = new mongoose.Schema({
    Name:{
        type:String
    },
    DOB:{
        type:String
    },
    Gender:{
        type:String
    },
    Age:{
        type:Number
    },
    Qualification:{
        type:String
    },
    PhoneNo:{
        type:Number
    },
    Subjects:{
        type:String
    },
})

export const model = mongoose.model("Teacher",schema)