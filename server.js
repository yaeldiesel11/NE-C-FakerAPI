const express = require('express');
const app = express();

const Usuario = require('./Usuario');
const Empresa = require('./Empresa');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/new", (req, res) => {
    const usernew = new Usuario();
    return res.status(200).json(usernew);
});

app.get("/api/companies/new", (req, res) => {
    const empresanew = new Empresa();
    return res.status(200).json(empresanew);
});

app.get("/api/user/company", (req, res) => {
    usernew = new Usuario();
    companynew = new Empresa();
    array = [usernew, companynew];
    return res.status(200).json(array);
});

app.listen(8080, () => {
    console.log("Servidor encendido en el puerto 8080.");
});