const express = require("express")
const {registerController, loginController, testController} = require("../controllers/authController");
const {requireSignIn, isAdmin} = require("../middlewares/authMiddleware");

//route object
const router = express.Router()

//roouting 
//register || method post
router.post('/register', registerController );

//LOGIN || POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController)

//Protected route auth

router.get("/user-auth", requireSignIn, (req, res)=>{
    res.status(200).send({ok: true})
})


module.exports = {router}