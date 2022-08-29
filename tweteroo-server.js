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
    const sendTweets=[];
    let cont  = 0;
    for(let i = tweets.length-1 ; i>=0 ; i--){    
        sendTweets.push(tweets[i])
        if(cont===9){
        i=-1;
     }
     cont ++
    }
    res.send(sendTweets)
})

app.post('/tweets', (req, res)=>{
    if (req.body.tweet === "") {
        return res.sendStatus(400);
        
    }
    app.use(cors())
    tweets.push({...req.body, avatar: user[0].avatar});
    res.send("OK").status(201);

})

app.post('/sign-up', (req, res)=>{
    if(!req.body.username || !req.body.avatar || !testUrl(req.body.avatar) ){
        return res.sendStatus(400)
    }
    app.use(cors())
    user.push(req.body);
    res.send("OK").status(201)

})

app.listen(5000);