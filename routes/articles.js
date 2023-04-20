const express = require('express');
const Article = require('../models/article')
const router = express.Router();

router.get('/new', function(req, res) {
    res.render('articles/new');
});

router.get('/:id', function(req, res) {

})

router.post('/', async function(req, res) {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
    })
    try {
        article = await article.save();
        res.redirect(`/articles/${article.id}`);
    }
    catch (error) {
        res.render('articles/new', { article: article })
    }
    
})

module.exports = router;