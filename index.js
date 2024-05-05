const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ alamin: 'here' });
});

const PORT = process.env.PORT || 8500;
app.listen(PORT);