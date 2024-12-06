
const zod = require('zod');
const jwt = require('jsonwebtoken');
import {Admin} from "../Model/admin"

const signupSchema = zod.object({   // Input Validation for the signupschema
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()

});

const signinSchema = zod.object({ //  Input Validation for the signinschema
    username: zod.string().email(),
    password: zod.string()
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

const admin = await Admin.create({ 
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName

})

const userId = user._id;

const token = jwt.sign({
    userId
}, process.env.JWT_SECRET);
// const userId = User._id;

res.json({
    messsage: "User created successfully",
    token: token
});


}

async function handleUserSignIn(req, res)
{
    const {success} = signinSchema.safeParse(req.body)
    if(!success)
    {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    
    const admin = await Admin.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(user)
    {
        const token = jwt.sign({
            userId: req.userId
        }, process.env.JWT_SECRET, {expiresIn: '24h'})

        res.json({
            token: token
        })
        return
    }

    res.status(411).json({
        message: "Incorrect password"
    })

};


const updateshema = zod.object({
    password:  zod.string().optional(),
    firstName:  zod.string().optional(), 
    lastName: zod.string().optional(),
});

async function handleUpdateAdmin(req, res)
{
  const {success} = updateshema.safeParse(req, res)
  if(!success)
  {
    return res.status(411).json({
        message: "Error while updating details"
    })
  }

  await Admin.updateOne({_id: req.userId}, req.body)
  res.json({
    messsage:"Updated Successfully"
  })
};



module.exports = {
    handleUserSignUp,
    handleUserSignIn,
    handleUpdateAdmin
}
