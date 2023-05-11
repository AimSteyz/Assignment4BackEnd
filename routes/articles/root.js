const {getArticles, getArticle, createArticle, updateArticle, deleteArticle} = require("../../controllers/article");

// Routes for articles
module.exports = async function (fastify) {
    fastify.get('/', getArticles);
    fastify.get('/:id', getArticle);
    fastify.post('/', createArticle);
    fastify.put('/:id', updateArticle);
    fastify.delete('/:id', deleteArticle);
}
