import express from 'express';
import routes from './src/routes/crmRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app=express();
const PORT=3000;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/crmdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('Running');
});

app.listen(PORT,()=>
   console.log(`Your server is running on port ${PORT}`)
);