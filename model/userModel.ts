import mongoose, { model } from "mongoose";

interface iUser {
    name: string,
    email: string,
    passsword:string
}

interface iUserData extends iUser, mongoose.Document { }

const userModel = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    }
},
    {
    timestamps:true
    })

    export default mongoose.model<iUserData>("users",userModel)