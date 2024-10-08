const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
const JWT = require("jsonwebtoken")

require("../models/userModel")

const registerController = async(req, res) =>{
    try {
        const {name, email, password, phone, address} = req.body
        //vaidation
        if (!name) {
            return res.send({msg: "name is required"})
        }
        if (!email) {
            return res.send({msg: "email is required"})
        }if (!password) {
            return res.send({msg: "password is required"})
        }if (!phone) {
            return res.send({msg: "phone is required"})
        }
        if (!address) {
            return res.send({msg: "address is required"})
        }
        //check user
        const existingUser = await userModel.findOne({email})
        //existing user
        if (existingUser) {
            return res.status(200).send({
                success:false,
                msg: 'Already register please login'
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save();
        res.status(201).send({
            success:true,
            msg: "User register successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            msg: "Error in registration",
            error
        })
        
    }
};

//login

const loginController = async(req, res)=>{
    try {
        const {email, password} = req.body
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success:false,
                msg:"invalid email or paasowrd"
            })
        }
        //compare
        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(404).send({
                success: false,
                msg: "Email is not registered"
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send(
                {
                    success:false,
                    msg: " invalid password",
                }
            )
        }
        //token
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET,{
            expiresIn:"7d"
        })
        res.status(200).send(
            {
                success:true,
                msg:"Login successfully",
                user:{
                    name: user.name,
                    email:user.email,
                    phone:user.phone,
                    address:user.address,
                },
                token,
            }
        )
    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                success:false,
                msg:'Error in Login',
                error
            }
        )
        
    }
}

const testController = (req, res) =>{
    try {
        res.send("Protected Routes")
    } catch (error) {
        console.log(error);
        res.send({error})
    }
}


module.exports = {registerController, loginController, testController}