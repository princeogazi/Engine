var express = require("express");
const app = express();

const port = 5000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first-template', (req, res) => {
    res.render('first_view')
});

app.get('/dynamic_view', (req, res) => {
    res.render('dynamic', {
        user: 'Princewill',
        url: 'www.gomycode.co'
    })
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        user: 'Temitayo'
    })
});

app.listen(5000, () => {
    console.log('Server is running at localhost:/5000')
});
