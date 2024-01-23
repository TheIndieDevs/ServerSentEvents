const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.port || 3000;

dotenv.config();

const app = express();

app.use(cors());

app.get( '/', (req, res)=>{
    res.send('backend opened');
});

app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    // Your SSE logic here
    res.write('data: hi\n\n');
    res.write('data: hi2\n\n');
    res.write('data: just testing\n\n');
    // You can periodically send updates using res.write('data: updated data\n\n');

    // Make sure to end the response when the connection is closed
    req.on('close', () => {
        // Clean up or handle disconnection
        res.end();
    });
})

//connectDB();

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})