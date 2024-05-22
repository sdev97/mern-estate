import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body
    if (req.body?.email && req.body?.username) {
        const hashedPassword = bcryptjs.hashSync(password, 10)
        const newUser = new User({username, email, password: hashedPassword})
        try {
            await newUser.save()
            res.status(201).json({
                message: 'User created successful',
                success: true
            })
        } catch (error) {
            next(error)
        }
    } else {
        res.status(500).json({
            message: "error"
        })
    }
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, 'Wrong cridential!'));
        const token = jwt.sign({id: validUser._id}, process.env.SECRET_KEY)
        const {password: pass, ...left} = validUser._doc
        res.cookie('access_token', token, {httpOnly: true, expires: new Date(Date.now() + 60 * 60)}).status(200).json(left)
    } catch (error) {
        next(error)
    }
}