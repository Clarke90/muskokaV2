var express = require('express');
var router = express.Router();

//adding references for register and login for staff
let passport = require('passport');
let Account = require('../models/accountStaff');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to muskoka steamship and discoovery' });
});

// staff dash
router.get('/staff-dashboard', function(req, res, next){
  res.render('staff-dashboard', { title:'Staff Dashboard'});
});

// child-login
router.get('/child-login', function(req, res, next){
  res.render('child-login', { title:'Please sign-in your child'});
});

//child-signout
router.get('/child-signout', function(req, res, next){
    res.render('child-signout', { title:'Please sign-out your child'});
});


// staff camper-reports
router.get('/camper-reports', function(req, res, next){
  res.render('camper-reports', { title:'Camper Reports'});
});

//staff daily camp archieve

router.get('/staff-camp-archive', function(req, res, next){
  res.render('staff-camp-archive', { title:'Daily Camper Archive'});
});

//staff register

router.get('/staff-register', function(req, res, next){
    res.render('staff-register', { title:'Staff Members Register Here...'});
});

//staff login GET handler

router.get('/staff-login', function(req, res, next){
    res.render('staff-login', { title:'Staff Members Login Here...'});
});
//staff sign in / out reports

router.get('/staff-signinOut-reports', function(req, res, next){
  res.render('staff-signinOut-reports', { title:'Parent Sign In / Out Reports'});
});

// staff payment
router.get('/staff-payment', function(req, res, next){
  res.render('staff-payment', { title:'Payments'});
});

///staff-camper-registration
router.get('/staff-camper-registration', function(req, res, next){
  res.render('staff-camper-registration', { title:'Camper Registration'});
});

// //user accounts
//  router.get('/user-accounts', function(req, res, next){
//    res.render('user-accounts', { title:'user accounts'});
//  });

/* POST staff register */
router.post('/staff-register', function(req, res, next) {
  //use the accountStaff model to create a new staff member with passport
  Account.register(new Account ( { username: req.body.username}), req.body.password,
  function(err, account) {
     if (err) { //failure
       console.log(err);
       res.redirect('error', { title: 'Create Account Error'});
     }
     // res.redirect('/staff-login');
  });
});

// POST staff login
router.post('/staff-login', passport.authenticate('local', {
  successRedirect: '/staff-dashboard',
    failureRedirect: '/staff-login',
    failureMessage: 'Invalid Login'
}));

module.exports = router;
