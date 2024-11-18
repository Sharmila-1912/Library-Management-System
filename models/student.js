const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    roll_no: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
    },
    addmission_year: {
        type: String,
    },
    phone_no: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Check if model already exists to avoid OverwriteModelError
module.exports = mongoose.models.Student || mongoose.model("Student", studentSchema);
