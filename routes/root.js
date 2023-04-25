const { register, login } = require('../controllers/auth');

module.exports = async function (fastify) {
    fastify.post('/register', register);
    fastify.post('/login', login);
}
