import mongoose from "mongoose";

const ProjectScehma = new mongoose.Schema({
    Name : {
        type : String
    },
    Link : {
        type : String ,
    },
    Img : {
        type : String
    }

})

export const ProjectModel = mongoose.model("Project", ProjectScehma)