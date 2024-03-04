const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to MERN App');
});


const port = 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});