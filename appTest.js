const express = require('express');
const path = require('path');
var port = process.env.PORT || 3000;
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const mongoose = require('mongoose');

// const authRouter = require('./routes/auth');
// const usersRouter = require('./routes/users');
// const { send } = require('process');

const app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/app/api/auth', authRouter);
// app.use('/users', usersRouter);
app.get("/ass",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
})

app.listen( port || 80 ,()=>{
    console.log('!dfds')
})

