const express = require('express');
const router = express.Router();
const config = require('config')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../model/User')
/* GET home page. */
router.get('/login', (req, res, next) => {
  res.send('Auth')
});

router.post('/login', async (req, res, next) => {
try {
  const {email, password} = req.body;
  const condidate = await User.findOne(email);
  if (condidate) {
    const token = jwt.sign({id:condidate._id,email:condidate.email}, config.get('app.secret'));
    localStorage.getItem("token", token)
    res.status(200).json({token,id:condidate._id})
  } else {
   res.status(401).json({error:true,message:"email не зарегестрирован"})
  }

} catch (e) {
  throw new Error('Ошибка авторизации')
}
});

router.post('/register', async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const condidate = await User.findOne(email);
    if (!condidate) {
      const result = bcrypt.hash(password, saltRounds);
      await User.create({email, result})
      res.status(200).json({error:false,message:"Успешная регистрация"})
    } else {
     res.status(403).json({error:true,message:"email уже зарегестрирован"})
    }
  
  } catch (e) {
    throw new Error('Ошибка авторизации')
  }
  });
  
  router.post('/logout', async (req, res, next) => {
    try {
      localStorage.removeItem("token")
    } catch (e) {
      throw new Error('Ошибка', e)
    }
    });
    

module.exports = router;
