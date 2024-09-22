const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const quizRouter = require('./routes/quiz');
const calRouter = require('./routes/calculator');


app.use(express.static(path.join(__dirname, 'views')));  // for using static files

app.use(methodOverride('_method')); // for using put and delete method para to sa form
app.use(express.json()); // for using json data pag send ng json format and receive
app.use(express.urlencoded ({extended:true}));  // for using form data 

app.set('view engine','ejs');


// kung ma papansin mo dalawa yung use ng '/' pinag hiwalay ko lang para di makalat sa index mo 
// pa din sa execution time ng code para mas mabilis 

// calculator page
app.use('/', calRouter);

// calculate api 
app.use('/', quizRouter); // for quiz i segregate the file folder structure

app.get('/profile', (req, res) => {
    res.render('profile', {title: 'Profile'});
})

app.get('/cmu-profile', (req, res) => {
    res.render('cmu-profile', {title: 'CMU Profile'});
});

// server
app.listen(3000, () => {
    console.log('Server is running at port 3000');
})