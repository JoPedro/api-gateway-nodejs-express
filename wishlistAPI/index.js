const app = require('express')();

app.get('/wishlist', (req, res) => res.send(
    'Lista de desejo<br>' +
    '<ul>' +
    '<li>iPhone 13</li>' + 
    '<li>TV LG 4K</li>' + 
    '<li>Geladeira Eletrolux</li>' +
    '<li>PS4 Pro</li>' + 
    '<li>Mouse Logitech sem fio</li>' +
    '<li>Caixa de som JBL</li>' +
    '<li>AirPods</li>' +
    '<li>Xbox One X</li>' +
    '</ul>'
));

app.listen(3002, () => console.log(`Lista de desejo na porta 3002`));