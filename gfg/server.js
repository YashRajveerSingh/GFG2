const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

const APP_ID = 'YOUR_APP_ID'; // Replace with your Adzuna app_id
const APP_KEY = 'YOUR_APP_KEY'; // Replace with your Adzuna app_key
const API_URL = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${APP_ID}&app_key=${APP_KEY}`;

app.get('/jobs', async (req, res) => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching jobs');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
