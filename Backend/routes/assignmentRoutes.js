const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const User = require("../models/User");

const authenticate = require("../middleware/authenticate"); // ✅ No need for `{}` because it's a function now


const router = express.Router();

// Configure Multer to save uploaded Java files

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Prevent duplicate names
    }
});

const upload = multer({ storage });


// 📌 API to handle Java code submission
router.post("/submit", authenticate, upload.single("javaFile"), async (req, res) => {
    try {
        
        const userId = req.user.userId;  
        const user = await User.findById(userId);

        if (!user || !user.knowledgeMap) {
            return res.status(400).json({ error: "User or knowledge map not found" });
        }

        const javaFilePath = req.file.path; // Temporary uploaded Java file
        const mindMapFilePath = path.join(__dirname, "../knowledge_maps/", user.knowledgeMap); // User's .mm file

        // 📌 Execute Python script and pass both file paths
        
        

        const command = `"C:\\Users\\hp\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" python_scripts/process_java.py "${javaFilePath}" "${mindMapFilePath}"`;

        exec(command, (error, stdout, stderr) => {
            fs.unlink(javaFilePath, (err) => {
                if (err) console.error("File deletion error:", err);
            });
        
            if (error) {
                console.error(`Execution error: ${stderr}`);
                return res.status(500).json({ error: "Error processing Java file" });
            }
        
            return res.json({ message: "Java file processed successfully!", output: stdout });
        });
        

        

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
