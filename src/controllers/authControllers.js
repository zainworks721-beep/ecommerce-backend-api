import User from "../model/user.model.js"
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken"

let register = async (req, res, next) => {

    try {
        const { username, email, password } = req.body
        let hashPassword = await bcrypt.hash(password, 10,)
        let registerUser = await User.create({ username, email, password: hashPassword })
        res.status(201).json({
            status: '201', data: registerUser, message:
                'User created successfully'
        });

    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ status: "400", "message": "this email is already use please enter a unique email" })
            return
        }
        next(error)
    }

}


const loginController = async (req, res, next) => {

    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({ "status": "400", "message": "All fields are required" })
            return
        }

        const findUser = await User.findOne({ email })

        if (!findUser) {
            res.status(401).json({ "status": "401", "message": "user not fonud" })
            return
        }
        const match = await bcrypt.compare(password, findUser.password)

        if (!match) {
            res.status(401).json({ status: "401", message: "Invalid email or password" });
            return
        }

        let loginUserInfo = await User.findById(findUser._id).select("-password")
       

        let token = () => {
            return Jwt.sign({ id: loginUserInfo._id }, process.env.JWT_SECRET,)
        }

        const myToken = token()


        res.status(200).json({
            status: "200", message: "Login successful",
            user: loginUserInfo,
            loginToken : myToken
        });

    } catch (error) {
        console.log(error)
        next(error)
    }


}

export {
    register,
    loginController
}