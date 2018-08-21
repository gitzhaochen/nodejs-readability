const express = require('express');
const app = express();

const parseurl=require('./routes/parseurl')

app.use('/parseurl', parseurl);

app.listen(3333,()=>{
    console.log('listen on port:3333')
});
