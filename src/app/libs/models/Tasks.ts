import mongoose from "mongoose";


const Schema  = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is require"]
    },
    description:{
        type: String,
    },

  date: { 
    type: Date,
    default: Date.now,
}, 
user:{
    type: Schema.Types.ObjectId,
    ref: "User"
},
  important:{type: Boolean},
  completed:{type: Boolean}

}, {timestamps: true})

export default mongoose?.models?.Task || mongoose.model("Task", TaskSchema);