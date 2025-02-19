const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000', // Your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
    //allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/api/market-data', async (req, res) => {
    try {
        const { symbol, timeframe } = req.query;
        const marketData = [
            {
                time: '2024-02-19',
                open: 100.0,
                high: 105.0,
                low: 98.0,
                close: 102.0
            }
        ];

        res.json(marketData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch market data' });
    }
});

const port = 3003;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
