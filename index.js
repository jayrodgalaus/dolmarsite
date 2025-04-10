const express = require('express');
const path = require('path');

const app = express();

// Serve the Vite build output (dist folder)
app.use(express.static(path.join(__dirname, 'dist')));

// Default route to serve the React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Use the dynamic PORT environment variable (especially for Vercel)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});