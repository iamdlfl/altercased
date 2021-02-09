const express = require('express');
const app = express();

const convertText = require('./utils/ConvertText');


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const result = '';
    const text = '';
    res.render('home', {result, text});
})
app.post('/', (req, res) => {
    const { text } = req.body;
    const resultArray = convertText(text);
    const result = resultArray.join('');
    res.render('home', {result, text});
})

app.listen(3000, () => {
    console.log('Listening on Port 3000...')
})