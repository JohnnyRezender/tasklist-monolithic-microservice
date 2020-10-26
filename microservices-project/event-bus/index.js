import express from 'express';
import bodyParser from 'body-parser'
import axios from 'axios';

const app = express();

app.use(express.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post("http://localhost:4002/events", event);
    // axios.post("http://localhost:3001/events", event);
    // axios.post("http://localhost:3002/events", event);
    // axios.post("http://localhost:3003/events", event);

    res.json("ook")
});

app.listen(4005, () =>{
    console.log("Event bus rodando na porta 4005");
});
