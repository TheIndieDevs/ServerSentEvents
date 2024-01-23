const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.port || 3000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use( '/', (req, res)=>{
    res.send('backend opened');
});

//connectDB();

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})