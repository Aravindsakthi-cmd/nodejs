const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());  // Enable JSON parsing

// Default route - serves HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle user input
app.post('/send-message', (req, res) => {
    const userMessage = req.body.message;
    console.log("Received:", userMessage);
    
    res.json({ reply: `You said: "${userMessage}" 🚀` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

