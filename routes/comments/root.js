const { createComment, getComments, getComment, deleteComment, updateComment } = require('../../controllers/comment');

// Routes for comments
module.exports = async function (fastify) {
    fastify.post('/', createComment);
    fastify.get('/', getComments);
    fastify.get('/:id', getComment);
    fastify.delete('/:id', deleteComment);
    fastify.put('/:id', updateComment);
}
