import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bycyptjs from "bcryptjs"

export const test = (req, res) => {
    res.json({
        message: 'Hello world'
    })
}

export const updateUser = async (req, res, next) => {
    console.log('AAAA', req.user.id, req.params.id)
    if (req.user.id !== req.params.id) return next(errorHandler(401, 'Unauthorized'));
    try {
        if (req.body.password) {
            req.body.password = bycyptjs.hashSync(req.body.password, 10)
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                // ...req.body,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar
            }
        }, {new: true})

        const {password, ...rest} = updatedUser._doc
        res.status(200).json(rest)
    } catch (error) {
        next(error)
    }
}