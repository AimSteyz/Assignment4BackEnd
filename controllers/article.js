const Article = require('../database/models/article.model');
const User = require('../database/models/user.model');

// Create an article
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

// Get all articles
const getArticles = async (req, res) => {
    const articles = await Article.find();
    if (articles)
        return res.status(200).send(articles);
    return res.status(400).send({ Error: "No articles found." });
}

// Get an article by id
const getArticle = async (req, res) => {
    const article = await Article.findById(req.params.id);
    if (article)
        return res.status(200).send(article);
    return res.status(400).send({ Error: "No article found." });
}

// Delete an article by id
const deleteArticle = async (req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (article)
        return res.status(200).send({ Success: "Article deleted." });
    return res.status(400).send({ Error: "No article found." });
}

// Update an article by id
const updateArticle = async (req, res) => {
    const article = await Article.findById(req.params.id);
    if (!article)
        return res.status(400).send({ Error: "No article found." });
    article.content = req.body.content;
    if (req.body.numberOfRatings !== article.numberOfRatings) {
        article.rating = (article.rating * article.numberOfRatings + req.body.rating) / (article.numberOfRatings + 1);
        article.numberOfRatings = article.numberOfRatings + 1;
    }
    await article.save();
    return res.status(200).send({ Success: "Article updated." });
}

// Export article controllers
module.exports = {
    createArticle,
    getArticles,
    getArticle,
    deleteArticle,
    updateArticle
}
