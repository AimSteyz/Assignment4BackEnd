const { register, login } = require('../controllers/auth');

// Routes for auth
module.exports = async function (fastify) {
    fastify.post('/register', register);
    fastify.post('/login', login);
}
