const express = require('express');

const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
    res.send('API is up and running!');
});

app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
});
