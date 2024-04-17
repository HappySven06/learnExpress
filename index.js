import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
const __dirname = import.meta.dirname;

app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// req => request , res => response
app.get('/', (req, res) => {
    console.log(req.query);
    res.render('index.njk');
});

app.get('/answer', (req, res) => {
    console.log(req.query);
    res.render('answer.njk', req.query);
    
});
app.post('/answer', (req, res) => {
    console.log(req.body);
    res.render('answer.njk', {...req.body,...req.query});
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});