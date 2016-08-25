let express = require('express');

let app = express();

let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src/views'));


app.get('/', (req, res) => {
    res.send('Fuck you');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }

    console.log(`Listening to port: ${port}`);
});