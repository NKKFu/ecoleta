import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json([
        'Diego',
        'Nelson',
        'Jso'
    ])
});

app.listen(3000);