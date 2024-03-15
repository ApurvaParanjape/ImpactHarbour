import mongoose from "mongoose"

const organizationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    currentPosts:{
        type: Number,
    },
    description: {
        type: String,
        required: true
    }
})

const Organization = mongoose.model("Organization", organizationSchema);
export default Organization;