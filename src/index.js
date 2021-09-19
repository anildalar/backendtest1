const express = require("express");
const app = express();

const env = require('dotenv');
env.config();

const userRoute = require('./routes/UserRoute');

app.use(express.json());

app.use('/api',userRoute);

app.listen(process.env.PORT,()=>{
    console.log('The server is running on port',process.env.PORT)
});