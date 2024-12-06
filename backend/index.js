const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {adminRoute} = require("./Route/adminRoute");
const {rentalRoute} = require("./Route/rentalRoute");
const app = express();

const CONNECTION_URL = process.env.MONGO_CONNECTION_STRING 
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v2/admin", adminRoute);
app.use("/api/v2/rental", rentalRoute);


async function mongoConnect(connectUrl)
{
    try
    {
        await mongoose.connect(connectUrl);
        console.log("Connection to mongoDB is successfull");
    }
    catch(error)
    {
        console.error("error connecting to monogDB", error);
    }
}

mongoConnect(CONNECTION_URL)
.then(()=>
    {
        app.listen(PORT, ()=>
        {
            console.log(`Server is running at port ${PORT}`);
        })

    })
    .catch((err)=>{
    console.log(`Failed to connect to mongodb database`);
    process.exit(1);
    });

