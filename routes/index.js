var express = require('express');
var router = express.Router();
const session = require('express-session');
const fs = require('fs');

router.get('/login', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/login'); return; }
  res.render('login', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/login'); return; }
  res.render('languages', { title: 'Express' });
});

router.get('/error', function(req, res, next) {
  //if (!req.session.error) { res.redirect('/error'); return; }
  res.render('error', { title: 'Express' });
});

router.get('/errors', function(req, res, next) {
  //if (!req.session.errors) { res.redirect('/errors'); return; }
  res.render('errors', { title: 'Express' });
});

router.get('/peliculas', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('peliculas', { title: 'Express' });
});

router.get('/series', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('series', { title: 'Express' });
});

router.get('/shows', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('shows', { title: 'Express' });
});

router.get('/languages', function(req, res, next) {
  //if (!req.session.languages) { res.redirect('/languages'); return; }
  res.render('languages', { title: 'Express' });
});

router.get('/movies', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('movies', { title: 'Express' });
});

router.get('/movies/lucy', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('movies/lucy', { title: 'Express' });
});

router.get('/movies/bourne', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('movies/bourne', { title: 'Express' });
});

router.get('/movies/taken', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('movies/taken', { title: 'Express' });
});

router.get('/movies/enigma', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('movies/enigma', { title: 'Express' });
});

router.get('/movies/mi', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('movies/mi', { title: 'Express' });
});

router.get('/movies/tron', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('movies/tron', { title: 'Express' });
});

router.get('/movies/pulpfiction', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('movies/pulpfiction', { title: 'Express' });
});

router.get('/shows/himym', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('shows/himym', { title: 'Express' });
});

router.get('/shows/brooklyn', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('shows/brooklyn', { title: 'Express' });
});

router.get('/shows/bb', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('shows/bb', { title: 'Express' });
});

router.get('/shows/gambit', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('shows/gambit', { title: 'Express' });
});

router.get('/shows/naruto', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('shows/naruto', { title: 'Express' });
});

router.get('/sports/messi', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('sports/messi', { title: 'Express' });
});

router.get('/sports/dim', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('sports/dim', { title: 'Express' });
});

router.get('/sports/colombia', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('sports/colombia', { title: 'Express' });
});

router.get('/sports/clippers', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('sports/clippers', { title: 'Express' });
});

router.get('/sports/lakers', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('sports/clippers', { title: 'Express' });
});

router.get('/logins', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/'); return; }
  res.render('home', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('login')
});

router.get('/dashboard', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('dashboard', { title: 'Express' });
});

router.get('/inicio', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('inicio', { title: 'Express' });
});

router.get('/pricing', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/'); return; }
  res.render('pricing', { title: 'Express' });
});

router.get('/planes', function(req, res, next) {
  //if (!req.session.login) { res.redirect('/'); return; }
  res.render('planes', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  let name = req.session.username
  let data = req.session.userData
  const dataView = {
    'name': name,
    'data': data
  }
  res.render('profile', dataView);
});

router.get('/perfil', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  let name = req.session.username
  let data = req.session.userData
  const dataView = {
    'name': name,
    'data': data
  }
  res.render('perfil', dataView);
});

router.get('/sports', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('sports', { title: 'Express' });
});

router.get('/deportes', function(req, res, next) {
  if (!req.session.login) { res.redirect('/'); return; }
  res.render('deportes', { title: 'Express' });
});

router.post('/login', function(req, res, next) {  
  const { username, password } = req.body;
  // Verifica si el usuario existe en el archivo users.json
  const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
  if (users[username] && users[username].password === password) {
    // Autentica al usuario

    req.session.login = 1;
    req.session.userData = users[username]
    req.session.username = username;

    console.log('REQ.SESSION.USERDATA', req.session.userData)
    // Redirige a la página de inicio
    res.redirect('dashboard');
  } else {
    res.redirect('error');
  }
});

router.post('/logins', function(req, res, next) {  
  const { username, password } = req.body;
  // Verifica si el usuario existe en el archivo users.json
  const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
  if (users[username] && users[username].password === password) {
    // Autentica al usuario

    req.session.login = 1;
    req.session.userData = users[username]
    req.session.username = username;

    console.log('REQ.SESSION.USERDATA', req.session.userData)
    // Redirige a la página de inicio
    res.redirect('inicio');
  } else {
    res.redirect('errors');
  }
});

router.get('/registro', function(req, res, next) {
  
  res.render('registro', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
  console.log('BODY REGISTER POST: ', req.body);
  const { username, password, radiob, cardNumber, cardHolder, cvv } = req.body;

  try {
    // Verifica si el usuario ya existe en el archivo users.json
    fs.readFile('./users.json', 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Error reading users file.');
      }

      const users = JSON.parse(data);
      if (users[username]) {
        throw new Error('El usuario ya existe');
      }

      users[username] = { password, radiob, cardNumber, cardHolder, cvv };
      fs.writeFile('./users.json', JSON.stringify(users), (err) => {
        if (err) {
          throw new Error('Error writing to users file.');
        }
        res.redirect('/login');
      });
    });
  } catch (error) {
    res.send(error.message);
  }
});

router.post('/registro', function(req, res, next) {
  console.log('BODY REGISTER POST: ', req.body);
  const { username, password, radiob, cardNumber, cardHolder, cvv } = req.body;

  try {
    // Verifica si el usuario ya existe en el archivo users.json
    fs.readFile('./users.json', 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Error reading users file.');
      }

      const users = JSON.parse(data);
      if (users[username]) {
        throw new Error('El usuario ya existe');
      }

      users[username] = { password, radiob, cardNumber, cardHolder, cvv };
      fs.writeFile('./users.json', JSON.stringify(users), (err) => {
        if (err) {
          throw new Error('Error writing to users file.');
        }
        res.redirect('/logins');
      });
    });
  } catch (error) {
    res.send(error.message);
  }
});


module.exports = router;
