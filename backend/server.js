import express from 'express';
import mongoose from 'mongoose';
import Videos from './dbModel.js'
import Cors from 'cors';


const app = express();
const port = process.env.PORT || 8001

const connection_url = "mongodb+srv://admin:tF2xP5t92HNuvpXd@cluster0.8ji3tic.mongodb.net/tiktokDb?retryWrites=true&w=majority"


app.use(express.json());
app.use(Cors())

mongoose.set('strictQuery', false);
mongoose.connect(connection_url)


app.get('/', (req, res) => res.status(200).send('TikTok clone Ajith kumar'))

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err) res.status(500).send(err);
        else res.status(201).send(data);
    })
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) res.status(500).send(err)
        else res.status(200).send(data);
    })
})



app.listen(port, () => console.log(`Listening on localhost: ${port}`));