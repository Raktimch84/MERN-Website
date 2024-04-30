import mongoose, { model } from "mongoose";

const todoschema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const todomodel = mongoose.model("activities",todoschema)

export default todomodel;