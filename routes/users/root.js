const {getUsers, getUser, updateUser, deleteUser} = require('../../controllers/user');

// Routes for users
module.exports = async function (fastify) {
    fastify.get('/', getUsers);
    fastify.get('/:id', getUser);
    fastify.put('/:id', updateUser);
    fastify.delete('/:id', deleteUser);
}
