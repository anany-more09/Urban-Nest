const express = require("express")
const adminRoute = express.Router();


adminRoute.post("/signup", handleSignup);
adminRoute.post("/signin", handleSignin);
adminRoute.put("/update", handleUpdate);


// admin = The landloard who wants to add their PG for rental puposes.

module.exports = {
   
    adminRoute

}