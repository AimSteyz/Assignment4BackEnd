const User = require('../database/models/user.model');

const getUsers = async (req, res) => {
    const users = await User.find();
    if (users)
        return res.status(200).send(users);
    return res.status(400).send({ Error: "No users found." });
}

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user)
        return res.status(200).send(user);
    return res.status(400).send({ Error: "No user found." });
}

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

module.exports = {
    getUsers,
    getUser,
    updateUser
}
