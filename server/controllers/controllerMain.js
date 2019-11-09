// Modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');


//MODELS
let Admin = mongoose.model('Admin');
let Warden = mongoose.model('Warden');
let Owner = mongoose.model('Owner');
let User = mongoose.model('User');
let Elephant = mongoose.model('ElephantData');


// GET
router.get('/',(req, res, next)=>{
    res.render('index', { title: 'Index' });
});

router.get('/login',(req, res, next)=>{
    res.render('login', { title: 'login' });
});

router.get('/signup',(req, res, next)=>{
    res.render('Owner/signUp', { title: 'Registration' });
});

//POST
router.post('/login',(req,res,next)=>{
    email = req.body.email;
    password = req.body.password;




});


module.exports = router;
