const Article = require('../database/models/article.model');
const User = require('../database/models/user.model');

const createArticle = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        res.code(400).send({ message: 'Missing Content' })
    }
    const author = await User.findById(req.body.author);
    if (!author) {
        res.code(400).send({ message: 'Author not found' })
    }
    try {
        const article = await Article.create({
            title,
            content,
            author
        })
        res.code(201).send({ article })
    } catch (err) {
        res.code(400).send({ message: err.message })
    }
}

const getArticles = async (req, res) => {
    const articles = await Article.find();
    if (articles)
        return res.status(200).send(articles);
    return res.status(400).send({ Error: "No articles found." });
}

const getArticle = async (req, res) => {
    const article = await Article.findById(req.params.id);
    if (article)
        return res.status(200).send(article);
    return res.status(400).send({ Error: "No article found." });
}

const deleteArticle = async (req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (article)
        return res.status(200).send({ Success: "Article deleted." });
    return res.status(400).send({ Error: "No article found." });
}

const updateArticle = async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body);
    if (article)
        return res.status(200).send({ Success: "Article updated." });
    return res.status(400).send({ Error: "No article found." });
}

module.exports = {
    createArticle,
    getArticles,
    getArticle,
    deleteArticle,
    updateArticle
}
