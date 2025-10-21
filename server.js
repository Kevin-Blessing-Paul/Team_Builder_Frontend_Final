const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Dummy data
const teams = [
  { id: 1, name: 'Web Warriors', skills: ['React', 'CSS'], interests: ['Web'], year: '2' },
  { id: 2, name: 'AI Explorers', skills: ['Python'], interests: ['AI'], year: '3' },
  { id: 3, name: 'Mobile Magic', skills: ['Kotlin'], interests: ['Mobile'], year: '2' },
  { id: 4, name: 'Data Dynamos', skills: ['Python'], interests: ['Data'], year: '4' }
];

app.get('/', (req, res) => res.redirect('/login'));

// Feature pages


app.get('/feature1', (req, res) => res.render('feature1', { bodyClass: 'dark-page' }));
app.get('/feature2', (req, res) => res.render('feature2', { bodyClass: 'dark-page' }));
app.get('/feature3', (req, res) => res.render('feature3', { bodyClass: 'dark-page' }));
app.post('/login', (req, res) => {
  const role = req.body.role;
  if(role === 'leader') return res.redirect('/leader');
  return res.redirect('/member');
});
app.get('/login', (req, res) => {
  res.render('login', { bodyClass: 'login-page' });
});

app.get('/leader', (req, res) => {
  res.render('leader', { teams, bodyClass: 'dark-page' });
});

// Member page
app.get('/member', (req, res) => {
  res.render('member', { teams, bodyClass: 'dark-page' });
});;

app.post('/leader/post', (req, res) => {
  const { name, skills, interests, year } = req.body;
  const newTeam = {
    id: teams.length + 1,
    name: name || 'Untitled',
    skills: skills ? skills.split(',').map(s => s.trim()) : [],
    interests: interests ? interests.split(',').map(i => i.trim()) : [],
    year: year || 'Any'
  };
  teams.push(newTeam);
  res.redirect('/leader');
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Frontend running at http://localhost:${PORT}`));

