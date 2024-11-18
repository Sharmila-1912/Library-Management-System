const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/Student");
const requireLogin = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../keys");

// Student Signup Route
router.post("/signup", (req, res) => {
    const { name, password, email, roll_no, branch, year, phone_no, isAdmin } = req.body;
    if (!roll_no || !password) {
        return res.status(422).json({ error: "Please add all the fields" });
    }
    Student.findOne({ roll_no: roll_no })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "Student already exists with that roll no" });
            }
            bcrypt.hash(password, 12).then((hashedpassword) => {
                const user = new Student({
                    name,
                    email,
                    roll_no,
                    branch,
                    addmission_year: year,
                    phone_no,
                    password: hashedpassword,
                    isAdmin
                });
                user
                    .save()
                    .then((user) => {
                        res.json({ message: "Saved successfully" });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// Student Signin Route
router.post("/signin", (req, res) => {
    const { roll_no, password } = req.body;
    if (!roll_no || !password) {
        return res.status(422).json({ error: "Please add roll_no and password" });
    }
    Student.findOne({ roll_no: roll_no }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid roll_no or password" });
        }
        bcrypt
            .compare(password, savedUser.password)
            .then((doMatch) => {
                if (doMatch) {
                    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                    // Update the student status to 'loggedIn'
                    savedUser.status = 'loggedIn';
                    savedUser.save();

                    res.json({
                        token,
                        user: savedUser
                    });
                } else {
                    return res.status(422).json({ error: "Invalid roll_no or password" });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });
});

// Fetch the Profile of a Student
router.get("/profile", requireLogin, (req, res) => {
    Student.find({ _id: req.user._id })
        .select("-password")
        .then((admins) => {
            res.json(admins);
        })
        .catch((err) => {
            console.log(err);
        });
});

// Fetch All Students
router.get("/allStudent", (req, res) => {
    Student.find().sort({ createdAt: -1 }).then((data) => {
        res.status(200).json(data);
    });
});

// Remove a Student by ID
router.post("/removeStudent", async (req, res) => {
    try {
        await Student.findOneAndDelete({ _id: req.body.postId });
        res.send("You successfully removed the student");
    } catch (error) {
        console.log(error);
    }
});

// Fetch Logged-In Students for Admin Dashboard
router.get("/logged-in-students", (req, res) => {
    Student.find({ status: 'loggedIn' }) // Assuming 'status' field is used to track login state
        .then((students) => {
            res.status(200).json(students);
        })
        .catch((err) => {
            res.status(500).json({ message: "Error fetching logged-in students", error: err });
        });
});

module.exports = router;
