const User = require('../database/models/user.model')
const bcrypt = require('bcrypt')

const register = async (req, reply) => {
    console.log(req.body)
    const { username, email, password } = req.body
    try {
        const user = await User.create({
            username,
            email,
            password: await bcrypt.hash(password, 10)
        })
        reply.code(201).send({ user })
    } catch (err) {
        reply.code(400).send({ message: err.message })
    }
}

const login = async (req, reply) => {
    const { email, password } = req.body

    if (!email || !password) {
        reply.code(400).send({ message: 'Missing credentials' })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            reply.code(400).send({ message: 'Auth not found' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            reply.code(400).send({ message: 'Invalid credentials' })
        }
        reply.code(200).send({ user })
    } catch (err) {
        reply.code(400).send({ message: err.message })
    }
}

module.exports = {
    register,
    login
}
