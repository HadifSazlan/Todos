

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, 'name must be less than 20 characters'],
    },
    completed:{
      type: Boolean,
      default: false,
    }
})

/*
model names usually singular && start with capital letter
Mongoose will create collection name in MongoDB by converting name to lowercase and pluralize.
'Task' would become 'tasks'
*/
  export default mongoose.model('Task', taskSchema);