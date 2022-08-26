import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

const user=[];

app.get('/tweets', (req, res)=>{
    app.use(cors())
    console.log(user)
    res.send(user)
})


app.post('/sign-up', (req, res)=>{
    app.use(cors())
    user.push({...req.body,tweet:''});
    res.send('')

})

app.listen(5000);