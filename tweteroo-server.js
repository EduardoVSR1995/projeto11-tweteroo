import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

const user=[];
const tweets=[];

function testUrl(avatar){
    try {
        let url = new URL(avatar)
        return true;
    } catch(err) {
        return false;
    }
       
}


app.get('/tweets', (req, res)=>{
    app.use(cors())
    if(tweets.length>10){
        tweets.splice(0,1);
    }
    res.send(tweets)
})

app.post('/tweets', (req, res)=>{
    app.use(cors())
    tweets.push({...req.body, avatar: user[0].avatar});
    res.send("OK").status(201);

})

app.post('/sign-up', (req, res)=>{
    console.log(!req.body.username , !req.body.avatar , !testUrl(req.body.avatar));
    if(!req.body.username || !req.body.avatar || !testUrl(req.body.avatar) ){
        return res.sendStatus(400)
    }
    

    app.use(cors())
    user.push(req.body);
    res.send("OK")

})

app.listen(5000);