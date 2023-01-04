//rerquires, modulos que usamos
const express = require('express')
const app = new express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
//const Swal = require('sweetalert2')
const flash = require('connect-flash');
const expressSession = require('express-session');
const authRouter = require('./routes/authRouter');
const patientsRouter = require('./routes/patientsRouter');
const usersRouter = require('./routes/usersRouter');

//custom middleware logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//Conexion a base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
//mongoose.connect('mongodb+srv://m001-student:Colombia2022@sandbox.porbi.mongodb.net/my_database', {useNewUrlParser: true});

//middlewares
//const validationMiddleware = require("./middleware/validationMiddleware");
const authMiddleware = require('./middleware/authMiddleware');
//const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

//controladores
const homeController = require('./controllers/home')
const newPostController = require('./controllers/newPost')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

//confg plantillas
app.set('view engine', 'ejs');

//configuracion express
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//config session
app.use(expressSession({
    secret: 'keyboard Dog',
    resave: true,               //se agrega para corregir warning de express-session-deprecated
    saveUninitialized: true     //se agrega para corregir warning de express-session-deprecated

}))

//config user logged
global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

app.use(fileUpload())
//app.use('/posts/store', validationMiddleware)
app.use(flash());

//rutas
app.get('/', homeController)

app.get('/post/new', authMiddleware, newPostController)
app.post('/posts/store', authMiddleware, storePostController)
app.get('/post/:id', getPostController)


//routers
app.use('/auth', authRouter);
app.use('/patients', patientsRouter);
app.use('/users', usersRouter);


app.use((req, res) => res.render('notfound'));  //not foud debe ir al final


//configuracion heroku
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8081;
}
app.listen(port, () => {
    console.log('App listening... port: ' + port)
})