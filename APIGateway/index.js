const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;
const {
    TABUADA7_API_URL,
    WISHLIST_API_URL,
} = require('./urls');

const tabuada7ServiceProxy = httpProxy(TABUADA7_API_URL);
const wishlistServiceProxy = httpProxy(WISHLIST_API_URL);

app.get('/', (req, res) => res.send('API Gateway'));

app.get('/tabuada7', (req, res, next) => tabuada7ServiceProxy(req, res, next));
app.get('/wishlist', (req, res, next) => wishlistServiceProxy(req, res, next));

app.listen(port, () => console.log(`API Gateway na porta ${port}`));