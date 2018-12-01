const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
// ----------------------------------------------------------
const authValidator = require('./middlewares/authValidator');
// ----------------------------------------------------------
const routerSignUp = require('./routes/signup');
app.use('/signup', routerSignUp);
// ----------------------------------------------------------
const routerSignIn = require('./routes/signin');
app.use('/signin', routerSignIn);
// ----------------------------------------------------------
const routerUsuarios = require("./routes/usuarios");
app.use("/usuarios", authValidator, routerUsuarios);
// ----------------------------------------------------------
app.get("/*", (req, res) => {
    res.end("Archivo no encontrado");
});
// ----------------------------------------------------------
app.listen(app.get('port'), () => {
    console.log(`Server works on port: ${app.get('port')}`);
});