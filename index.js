const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// bodyParser config must come before requiring routes or req.body = undefined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const todoRoutes = require('./routes/todos');

app.use('/api/todos', todoRoutes);




app.get('/', (req, res)=> {
    res.send('Hello form index.js')
});



app.listen(port, ()=> {
    console.log(`Express app listening at http://localhost:${port}`)
});