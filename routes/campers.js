var express = require('express');
var router = express.Router();

// reference game model for CRUDNESS
let Camper = require('../models/camper');
let Test = require('../models/user-accounts');

/* GET profile page. */
router.get('/staff-camper-profiles', function(req, res, next) {

Camper.find(function(err, queryResults){
  if(err){
    console.log(err);
    res.end(err);
    return;
  }
else{
  console.log(queryResults);
  res.render('staff-camper-profiles', {
    camper: queryResults,
    title:'Camper Profiles'
  });
}
  });
});

//////////////////////
/* GET USERS page. */
router.get('/user-accounts', function(req, res, next) {

Test.find(function(err, queryResults){
  if (err){
    console.log(err);
    res.end(err);
    return;
  }
else{
  console.log(queryResults);
  res.render('user-accounts', {
    camper: queryResults,
    title:'User Accounts'
  });
}
  });
});

// POST /child-login
router.post('/child-login', function(req, res, next) {
   // use the camper model to add a new document to mongodb
   Camper.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
   },function(err) {
      if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      res.redirect('index');
   });
});

// make public
module.exports = router;
