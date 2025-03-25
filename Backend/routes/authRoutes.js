// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const fs = require("fs");
// const path = require("path");
// const User = require("../models/User");

// const router = express.Router();


// // 📌 Login Route
// router.post("/login", async (req, res) => {
//   try {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });

//       if (!user) return res.status(400).json({ error: "User not found" });

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

//       const token = jwt.sign({ userId: user._id, role: user.role }, "your_secret_key", { expiresIn: "1h" });

//       res.json({ message: "Login successful", token });
//   } catch (error) {
//       console.error("Login Error:", error);
//       res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;

// // 📌 User Registration Route
// router.post("/register", async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body;

//         // Check if user already exists
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ error: "User already exists" });

//         // Hash password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // 📌 Create a unique `.mm` file for the user
//         const knowledgeMapFileName = `${email.replace(/[@.]/g, "_")}.mm`;
//         const userKnowledgeMapPath = path.join(__dirname, "../knowledge_maps/", knowledgeMapFileName);

//         // Copy `default.mm` as the base map
//         fs.copyFileSync(path.join(__dirname, "../knowledge_maps/default.mm"), userKnowledgeMapPath);

//         // Save user with knowledge map path
//         user = new User({
//             name,
//             email,
//             password: hashedPassword,
//             role,
//             knowledgeMap: knowledgeMapFileName, // Store the filename, not full path
//         });

//         await user.save();

//         res.json({ message: "User registered successfully!" });

//     } catch (error) {
//         console.error("Registration Error:", error);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// module.exports = router;
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const User = require("../models/User");
const { exec } = require("child_process");

const router = express.Router();
const authenticate = require("../middleware/authenticate"); 

const KNOWLEDGE_MAP_FOLDER = path.join(__dirname, "../knowledge_maps"); // Adjust path as needed

// const MM_FOLDER = path.join(__dirname, "../uploads"); // Store .mm files
// const HTML_FOLDER = path.join(__dirname, "../exports"); // Store exported .html files


// const knowledgeMapPath = path.join(__dirname, "../knowledge_maps");

// Fix the download route using router.get instead of app.get
router.get("/download/:filename", (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(KNOWLEDGE_MAP_FOLDER, filename);
  
    // Check if the file exists before downloading
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" });
    }
  
    res.download(filePath, (err) => {
      if (err) {
        console.error("Download Error:", err);
        res.status(500).json({ error: "Error downloading file" });
      }
    });
  });


  

router.get("/getKnowledgeMaps", (req, res) => {
    fs.readdir(KNOWLEDGE_MAP_FOLDER, (err, files) => {
      if (err) {
        return res.status(500).json({ error: "Failed to retrieve knowledge maps" });
      }
      res.json(files.filter((file) => file.endsWith(".mm"))); // Return only .mm files
    });
  });
  
  // Serve knowledge maps as static files for Freeplane
  router.use("/freeplane_maps", express.static(KNOWLEDGE_MAP_FOLDER));
  

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // ✅ Ensure both fields exist
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
  
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  
        const token = jwt.sign({ userId: user._id, role: user.role }, "your_secret_key", { expiresIn: "1h" });
  
        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Server error" });
    }
  });
  

  router.get("/profile", authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });
        
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});


router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ error: "All fields (name, email, password, role) are required" });
        }

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 📌 Validate email before calling `.replace()`
        if (typeof email !== "string") {
            return res.status(400).json({ error: "Invalid email format" });
        }

        // 📌 Create a unique `.mm` file for the user
        const knowledgeMapFileName = `${email.replace(/[@.]/g, "_")}.mm`;
        const userKnowledgeMapPath = path.join(__dirname, "../knowledge_maps/", knowledgeMapFileName);

        // Copy `default.mm` as the base map
        const defaultMapPath = path.join(__dirname, "../knowledge_maps/default.mm");

        if (!fs.existsSync(defaultMapPath)) {
            return res.status(500).json({ error: "Default knowledge map not found" });
        }

        fs.copyFileSync(defaultMapPath, userKnowledgeMapPath);

        // Save user with knowledge map path
        user = new User({
            name,
            email,
            password: hashedPassword,
            role,
            knowledgeMap: knowledgeMapFileName, // Store the filename, not full path
        });

        await user.save();

        res.json({ message: "User registered successfully!" });

    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
