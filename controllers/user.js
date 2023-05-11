const User = require('../database/models/user.model');

// Get all users
const getUsers = async (req, res) => {
    const users = await User.find();
    if (users)
        return res.status(200).send(users);
    return res.status(400).send({ Error: "No users found." });
}

// Get a user by id
const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user)
        return res.status(200).send(user);
    return res.status(400).send({ Error: "No user found." });
}

// Update a user by id
const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user)
        return res.status(400).send({ Error: "No user found." });
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email
    user.password = req.body.password || user.password
    user.roles = req.body.roles || user.roles;
    await user.save();
    return res.status(200).send({ Success: "User updated." });
}

// Delete a user by id
const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user)
        return res.status(200).send({ Success: "User deleted." });
    return res.status(400).send({ Error: "No user found." });
}

// Export the user controller
module.exports = {
    getUsers,
    getUser,
    updateUser,
    deleteUser
}
