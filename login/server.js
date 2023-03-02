const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('req-flash');
const app = express();


// Definisi lokasi file router
const loginRoutes = require('./src/routes/router-login');
const registerRoutes = require('./src/routes/router-register');
const appRoutes = require('./src/routes/router-app');

// Configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Configurasi library session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'key',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 70000 //sesi setelah login---satuan miliperdetik
    },
}))
app.use(flash());


app.use(flash());

// tambahkan ini
app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
});
// end

app.set('views',path.join(__dirname,'src/views'));





// Setting folder views
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

// Gunakan routes yang telah didefinisikan
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/', appRoutes);


app.listen(8000, ()=> {
    console.log("server ready")
})
