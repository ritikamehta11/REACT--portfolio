require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Skills = require('./models/skill.js')
const Projects = require('./models/project.js')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8888;
app.use(cors(
  {
    origin: ["https://portfolio-fe-wine.vercel.app"],
    methods: ["POST" , "GET"],
    credentials: true
  }

));
const mongoUri = process.env.MONGO_URI;

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get("/", async (req, res) => {
  res.json();

});

app.get('/skills', async (req, res) => {
 try {
    const skills = await Skills.find();
    console.log(skills);
    res.json(skills);
  } catch (err) {
    console.error('Error fetching skills:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
app.get('/projects', async (req, res) => {
  try {
    const projects = await Projects.find();  // Fetch all projects
    console.log(projects);
    res.json(projects);  // Return all projects as JSON
  } catch (err) {
    console.error  ('Error fetching projects:', err);
    res.status(500).json({ message: 'Internal Server Error' });  // Handle errors
  }
});


app.get('/projects/:id', async (req, res) => {
  try {
    const projects = await Projects.findById(req.params.id);
    console.log(projects);
    res.json(projects);
  }
  catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
