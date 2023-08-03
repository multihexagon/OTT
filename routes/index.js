var express = require('express');
var router = express.Router();
const session = require('express-session');

router.get('/login', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/login'); return; }
  res.render('login', { title: 'Express' });
});

router.get('/logins', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/login'); return; }
  res.render('home', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/login'); return; }
  res.render('dashboard', { title: 'Express' });
});

router.get('/pricing', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/login'); return; }
  res.render('pricing', { title: 'Express' });
});

router.get('/planes', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/login'); return; }
  res.render('planes', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/login'); return; }
  res.render('profile', { title: 'Express' });
});

router.post('/login', function(req, res, next) {  

  res.redirect('home');
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/register', function(req, res, next) {  

  res.redirect('login');
});

module.exports = router;
