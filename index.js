const express = require('express');
const path = require('path');
const exphbs = require('express=handlebars')

const logger = require(',/middleware/logger')


const app = express();

// Init middleware
// app.user(logger);

// Handlabars middleware
app.engine('handlebars', exphbs({defaultlayout: 'main'}))

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Homepage Route
app.get('/',(req,res) => res.render('index'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// members API Routes
app.use('api/members', require('./routes/api/members'));

const PORT = process.env. PORT // 5000;

app.listen(PORT, () => console.log('server started on port ${5000}'));