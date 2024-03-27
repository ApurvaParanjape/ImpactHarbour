import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true 
        },
        image: String,
        location:{
            type: String,
            required: true 
        },
        vacancies: {
            type: Number,
            required: true 
        },
        organizationId: {
            type: String,
            //required: true 
        },
        organization: {
            type:String
        },
        applicants: {
            type : [String],
            default: [],
            //required:true
        },
        createdAt:{
            type: Date,
            default: new Date()
        },
        lastDate: {
            type: Date,
            //required:true
        }

    }
)

const Post = mongoose.model("Post", postSchema);

export default Post;