const app = require('express')();

app.get('/tabuada7', (req, res) => res.send(
    'Tabuada de multiplicação de 7<br><br>' +
    '7 x 1 = 7<br>' +
    '7 x 2 = 14<br>' + 
    '7 x 3 = 21<br>' +
    '7 x 4 = 28<br>' +
    '7 x 5 = 35<br>' +
    '7 x 6 = 42<br>' +
    '7 x 7 = 49<br>' + 
    '7 x 8 = 56<br>' + 
    '7 x 9 = 63<br>' +
    '7 x 10 = 70'
));

app.listen(3001, () => console.log(`Tabuada de 7 na porta 3001`));