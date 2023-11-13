import mongoose from "mongoose";


const Schema  = mongoose.Schema;

const TaskSchema = new Schema({
    title:{
        type: String,
        required: [true, "title is require"]
    },
    content:{
        type: String,
    },
    dueDate: { type: Date},
   
    status:{
        type: String,
        required: true,
        enum:[
            'progress',
            'important',
            'completed',
            'open'
        ],
    }
}, {timestamps: true})

export default mongoose?.models?.Task || mongoose.model("Task", TaskSchema);