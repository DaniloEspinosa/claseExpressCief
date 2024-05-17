// Importar el o los módulos

const express = require('express')
const app = express()

// Configurar el puerto
const PORT = 4000

const jsonAlumnos = require('./data/customers.json')

app.get('/', (req, res) => {
    // res.send('<h1>Home</h1>')
    res.sendFile(`./static/index.html`, {root: __dirname})
})

app.get('/alumnos', (req, res) => {
    res.json(jsonAlumnos)
    // res.send(JSON.stringify(jsonAlumnos))
})

app.get('/alumnos/:nombreAlumnoParam', (req, res) => {
    console.log(req.params)
    console.log(req.params.nombreAlumnoParam)

    const nombreAlumno = jsonAlumnos.find(item => item.name === req.params.nombreAlumnoParam)
    res.send(nombreAlumno)

})

app.use(express.static('static'));

app.use((req, res) => {
    res.status(404).sendFile(`./static/404.html`, {root: __dirname})
})

app.listen(PORT, ()=> {
    console.log(`Server listening on http://localhost:${PORT}`)
})