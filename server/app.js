// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://kanakpendse14:KGyFaYLPXMPE47CM@cluster0.lcpygs2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Define Student schema
// const Student = mongoose.model('Student', {
//   name: String,
//   age: Number,
//   mothersname: String,
//   fathername: String,
//   address: String,
//   bloodgroup: String,


// });

// const Teacher = mongoose.model('Teacher', teacherSchema);

// const teacherSchema = new mongoose.Schema( {
//   name: String,
//   age: Number,
//   education: String,
//   experience: Number,
//   address: String,
//   salaryRange: Number
// });




// // Serve index.html as root route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..','client', 'index.html'));
// });

// // POST route to add a new student
// app.post('/api/students', async (req, res) => {
//   const { name, age, mothersname, fathername, address, bloodgroup} = req.body;
//   const student = new Student({ name, age, mothersname, fathername, address, bloodgroup  });
//   await student.save();
//   res.status(201).json(student);
// });

// app.post('/api/teachers', async (req, res) => {
//   const { name, age, education, experience, address, salaryRange } = req.body;
//   const newTeacher = new Teacher({ name, age, education, experience, address, salaryRange });
//   await newTeacher.save();
//   res.status(201).json(newTeacher);
// });

// // GET route to fetch all students
// app.get('/api/students', async (req, res) => {
//   const students = await Student.find();
//   res.json(students);
// });

// // PUT route to update a student
// app.put('/api/students/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, age,mothersname, fathername, address, bloodgroup  } = req.body;
//   const updatedStudent = await Student.findByIdAndUpdate(id, { name, age, mothersname, fathername, address, bloodgroup  }, { new: true });
//   res.json(updatedStudent);
// });

// // DELETE route to delete a student
// app.delete('/api/students/:id', async (req, res) => {
//   const { id } = req.params;
//   await Student.findByIdAndDelete(id);
//   res.status(204).end();
// });

// // Serve static files from the "client" directory
// app.use(express.static(path.join(__dirname, 'client')));

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://kanakpendse14:KGyFaYLPXMPE47CM@cluster0.lcpygs2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define Student schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mothersname: String,
  fathername: String,
  address: String,
  bloodgroup: String,
});

const Student = mongoose.model('Student', studentSchema);

// Define Teacher schema
const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  education: String,
  experience: Number,
  address: String,
  salaryRange: String, // Consider storing salary range as String
});

const Teacher = mongoose.model('Teacher', teacherSchema);

// Serve index.html as root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// POST route to add a new student
app.post('/api/students', async (req, res) => {
  const { name, age, mothersname, fathername, address, bloodgroup } = req.body;
  const student = new Student({ name, age, mothersname, fathername, address, bloodgroup });
  await student.save();
  res.status(201).json(student);
});

// POST route to add a new teacher
app.post('/api/teachers', async (req, res) => {
  const { name, age, education, experience, address, salaryRange } = req.body;
  const newTeacher = new Teacher({ name, age, education, experience, address, salaryRange });
  await newTeacher.save();
  res.status(201).json(newTeacher);
});

// GET route to fetch all students
app.get('/api/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// PUT route to update a student
app.put('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, mothersname, fathername, address, bloodgroup } = req.body;
  const updatedStudent = await Student.findByIdAndUpdate(id, { name, age, mothersname, fathername, address, bloodgroup }, { new: true });
  res.json(updatedStudent);
});

// DELETE route to delete a student
app.delete('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.status(204).end();
});

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, 'client')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
