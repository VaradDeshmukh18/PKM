const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["student", "teacher"] },
    knowledgeMap: String  // Path to the user's .mm file
});

module.exports = mongoose.model("User", UserSchema);
