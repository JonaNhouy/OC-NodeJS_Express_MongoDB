const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

mongoose.connect('mongodb+srv://tayshiro:Test@cluster0.gvdnb.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
//simple respond
// app.use((req, res) => {
//     res.json({ message: 'Votre requête a bien été reçue !' });
// });

// //middleware
// app.use((req, res, next) => {
//   console.log('Requête reçue !');
//   next();
// });

// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ message: 'Votre requête a bien été reçue !' });
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Réponse envoyée avec succès !');
// });

//allows call http
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //acces API anything  origin
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //add headers mentionned request sended
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //send request with methods mentionned GET POST etc.
    next();
  });

//global middleware
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

//route post
// app.post('/api/stuff', (req, res, next) => {
//     console.log(req.body);
//     res.status(201).json({
//         message: 'Objet créé !'
//     });
// })

module.exports = app;