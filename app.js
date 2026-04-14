const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'basicproject')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'basicproject', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})