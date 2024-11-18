const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { MONGO_URI } = require("./keys");
const Student = require('./models/Student'); // Add the Student model

// Routes
const studentRoutes = require("./routes/student_route");
const bookRoutes = require("./routes/book_route");
const issueRoutes = require("./routes/issue_route");
const adminRoutes = require("./routes/admin_route");

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB is connected");
});

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`);
});

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/public', express.static('public'));

// API Routes
app.use('/api/users', studentRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/admin', adminRoutes);

// Example API for fetching logged-in students
app.get('/api/logged-in-students', (req, res) => {
  // Fetch students whose status is "loggedIn" from the database
  Student.find({ status: 'loggedIn' }, (err, students) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching students' });
    }
    res.json(students);
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    });
}

// Error Handling Middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.statusCode = 404;
    next(error);
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(err.statusCode || 500).json({
        message: err.message,
        status: err.statusCode || 500
    });
});

// Start the Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
