const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true});
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}))

app.get('/', function(req, res) {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'test description',

    }]
    res.render('articles/index',  { articles : articles });
})

app.use('/articles', articleRouter)

app.listen(PORT, function() { console.log(`now listening at ${{PORT}}`)});