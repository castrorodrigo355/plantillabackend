const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
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
const routerDeleteDb = require("./routes/deletedb");
app.use("/deletedb", routerDeleteDb);
// ----------------------------------------------------------
app.get("/*", (req, res) => {
    res.end("Archivo no encontrado");
});

app.listen(3000, () => {
    console.log("Servidor funcionando");
});