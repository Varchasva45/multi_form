const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/health', (req, res) => {
    res.send('Server is up and running');
})

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})
