const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, this is a simple Node.js!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

