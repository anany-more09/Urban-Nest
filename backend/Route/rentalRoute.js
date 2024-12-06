const express = require("express")
const rentalRoute = express.Router();

rentalRoute.post("/addpg", handleAddpg);
rentalRoute.put("/updatepg", handleUpdatepg);
rentalRoute.get("/pgdetail", handlePgdetail);


//rental = this route is for adding and updating pg details.

module.exports = {
    rentalRoute
}