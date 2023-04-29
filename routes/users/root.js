const {getUsers, getUser, updateUser} = require('../../controllers/user');

module.exports = async function (fastify) {
    fastify.get('/', getUsers);
    fastify.get('/:id', getUser);
    fastify.put('/:id', updateUser);
}
