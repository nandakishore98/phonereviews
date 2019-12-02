const express = require('express');
const router =express.Router();
const passport = require('passport')

router.get('/google',passport.authenticate('google',
{scope:['profile','email']}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),(req, res)=> {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

  router.get('/verify', (req, res) => {
    if(req.user){
      console.log(req.user);
    } else {
      console.log('Not Auth');
    }
  });

  router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
   });

module.exports = router;