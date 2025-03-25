const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    require("dotenv").config();  // ✅ Ensure .env is loaded
  
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access Denied: No token provided" });
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;  // ✅ Corrected token decoding
      next();
    } catch (err) {
      return res.status(403).json({ error: "Invalid Token" });
    }
};

// ✅ Add this line to export the function
module.exports = verifyToken;
