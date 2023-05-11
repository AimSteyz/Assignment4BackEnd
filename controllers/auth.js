const User = require('../database/models/user.model')
const bcrypt = require('bcrypt')

// Register a user
const register = async (req, reply) => {
    console.log(req.body)
    const { username, email, password } = req.body
    try {
        // Create a new user and create a hashed password
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

// Login a user
const login = async (req, reply) => {
    const { email, password } = req.body

    if (!email || !password) {
        reply.code(400).send({ message: 'Missing credentials' })
    }
    try {
        // Check that user exists
        const user = await User.findOne({ email })
        if (!user) {
            reply.code(400).send({ message: 'Auth not found' })
        }
        // Check that the password matches
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            reply.code(400).send({ message: 'Invalid credentials' })
        }
        reply.code(200).send({ user })
    } catch (err) {
        reply.code(400).send({ message: err.message })
    }
}

// Export the auth controller
module.exports = {
    register,
    login
}
