const Comment = require('../database/models/comment.model');
const Article = require('../database/models/article.model');

const createComment = async (req, res) => {
    const { content, author } = req.body;
    const article = await Article.findById(req.body.article);
    try {
        const comment = await Comment.create({
            content,
            author,
            article
        })
        article.comments.push(comment);
        await article.save();
        res.code(201).send({ comment })
    } catch (err) {
        res.code(400).send({ message: err.message })
    }
}

const getComments = async (req, res) => {
    const comments = await Comment.find();
    if (comments)
        return res.status(200).send(comments);
    return res.status(400).send({ Error: "No comments found." });
}

const getComment = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    if (comment)
        return res.status(200).send(comment);
    return res.status(400).send({ Error: "No comment found." });
}

const deleteComment = async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (comment) {
        const articleToUpdate = await Article.findById(comment.article);
        articleToUpdate.comments.pull(comment);
        await articleToUpdate.save();
        return res.status(200).send({ Success: "Comment deleted." });
    }
    return res.status(400).send({ Error: "No comment found." });
}

module.exports = {
    createComment,
    getComments,
    getComment,
    deleteComment
}
