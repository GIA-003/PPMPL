const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware untuk mengurai JSON

// Endpoint GET
app.get('/items/:id', (req, res) => {
    res.json({ id: req.params.id, name: "Item " + req.params.id, price: 100 });
});

// Endpoint POST
app.post('/items', (req, res) => {
    res.status(201).json(req.body);
});

// Endpoint PUT
app.put('/items/:id', (req, res) => {
    res.json({ id: req.params.id, ...req.body });
});

// Endpoint DELETE
app.delete('/items/:id', (req, res) => {
    res.status(204).send();
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${3000}`);
});
