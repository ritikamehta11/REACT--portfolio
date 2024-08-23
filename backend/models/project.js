const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: false },
  description: { type: String, required: true },
  demo : {type:String,required:true}
});

module.exports = mongoose.model('projects', ProjectSchema);
 