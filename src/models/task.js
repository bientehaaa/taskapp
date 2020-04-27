const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
    trim: true,
    
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})



const Tasks = mongoose.model('Tasks', taskSchema, 'tasks')


module.exports = Tasks