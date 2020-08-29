import mongoose from 'mongoose';

const Schema=mongoose.Schema;

export const ContactSchema=new Schema({
    firstName:{
        type:String,
        required:'Enter a First Name'
    },
    lastName:{
        type:String,
        required:'Enter a last Name'
    },
    email:{
        type:String
    },
    company:{
        type:String
    },
    phone:{
        type:String
    },
})