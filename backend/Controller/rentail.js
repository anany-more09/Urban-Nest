const zod = require('zod')
import { Rental } from '../Model/rental'

const signupSchema = zod.object({   // Input Validation for the rentalsdetals
    city: zod.string(),
    contact: zod.string(),
    status: zod.string(),
    category: zod.string()

});

async function handleUserSignUp(req, res)
{
    const {success} = signupSchema.safeParse(req.body)
    if(!success)
    {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    const existingUser = await Admin.findOne({username: req.body.username})

    if(existingUser)
    {
        return res.status(411).json({
            message: "Email already taken"
        });
    }

const rental = await Rental.create({ 
    city: req.body.city,
    contact: req.body.contact,
    status: req.body.status,
    category: req.body.category

})

res.json({
    messsage: "PG created successfully",
});


}