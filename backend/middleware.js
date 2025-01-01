const jwt = require("jsonwebtoken");
require("dotenv").config();

function authmiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log("Authorization Header:", authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(404).json({ message: "Authorization header not found or malformed" });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(404).json({ message: "Token not found" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded.userId) {
            return res.status(403).json({ message: "Forbidden: Invalid token data" });
        }

        // Check if the request is within 20 minutes of token issuance
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        const tokenAge = currentTime - decoded.iat; // Token age in seconds

        if (tokenAge > 20 * 60) { // 20 minutes in seconds
            return res.status(401).json({ message: "Unauthorized: Token expired beyond 20 minutes" });
        }

        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}

module.exports = {
    authmiddleware
};
