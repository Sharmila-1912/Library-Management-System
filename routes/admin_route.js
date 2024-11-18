// routes/admin_route.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin"); // Adjust the path if necessary

const router = express.Router();

// @route POST /api/admin/register
// @desc Register a new admin
router.post("/register", async (req, res) => {
  const { roll_no, password } = req.body;

  try {
    // Check if the admin already exists
    let admin = await Admin.findOne({ roll_no });
    if (admin) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    // Create new admin
    admin = new Admin({
      roll_no,
      password
    });

    // Save admin to database
    await admin.save();

    // Create and return JWT
    const payload = {
      admin: {
        id: admin.id,
      },
    };

    jwt.sign(
      payload,
      "yourJWTSecret", // Replace with your own secret
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
