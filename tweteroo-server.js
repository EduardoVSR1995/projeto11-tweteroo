import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

const user=[];
const tweets=[];

app.get('/tweets', (req, res)=>{
    app.use(cors())
    if(tweets.length>10){
        tweets.splice(0,1);
    }
    res.send(tweets)
})

app.post('/tweets', (req, res)=>{
    app.use(cors())
    console.log(req.body)
    tweets.push({...req.body, avatar: user[0].avatar});
    res.send("OK")

})

app.post('/sign-up', (req, res)=>{
    app.use(cors())
    console.log(req.body)
    user.push(req.body);
    res.send("OK")

})

app.listen(5000);