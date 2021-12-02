const mongoose = require = require('mongoose');


const todoSchema =new Schema({
    task_id :String,
    task:String
    
      
})
    
    
    const Todo = mongoose.model ('Todo', todoSchema);
    module.exports = Todo
