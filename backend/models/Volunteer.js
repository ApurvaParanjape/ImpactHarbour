import mongoose from "mongoose"

const volunteerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    aadharCard: {
        type: String,
        required: true,
        unique: true
    },
    image : String,
    phone : {
        type: String,
        required: true,
        unique: true
    }
})

const Volunteer = mongoose.model("Volunteer", volunteerSchema)
export default Volunteer