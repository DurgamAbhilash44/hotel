const express = require('express');
const db = require('./db');  // Ensure your database connection is correctly configured
const MenuRoutes = require('./routes/MenuRoutes');
const PersonRoutes = require('./routes/PersonRoutes');
require('dotenv').config();  // Load environment variables

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('server is running');
})
// Routes with a proper base path for each
app.use('/api/person', PersonRoutes);  // Person-related routes
app.use('/api/menu', MenuRoutes);      // Menu-related routes

// Default port from .env or fallback to 3002
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
});
