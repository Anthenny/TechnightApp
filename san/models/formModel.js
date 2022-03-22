const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This form requires a name"],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "This form requires a email"],
        unique: true,
        lowercase: true
    },
    phone_number: {
        type: Number,
        required: [true, "This form requires a phone number"]
    },
    company: {
        type: String,
        default: null
    },
    role: {
        type: String,
        default: null
    },
    refference: {
        type: String,
        default: null
    }
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;