//Import logic router in file stuff
const express = require('express');
const router = express.Router();
// const Thing = require('../models/Thing');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/stuff');

//save Things in DB
router.post('/', auth, multer, stuffCtrl.createThing);

//add route api/stuff
// app.use('/api/stuff', (req, res, next) => {
//     const stuff = [
//       {
//         _id: 'oeihfzeoi',
//         title: 'Mon premier objet',
//         description: 'Les infos de mon premier objet',
//         imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//         price: 4900,
//         userId: 'qsomihvqios',
//       },
//       {
//         _id: 'oeihfzeomoihi',
//         title: 'Mon deuxième objet',
//         description: 'Les infos de mon deuxième objet',
//         imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//         price: 2900,
//         userId: 'qsomihvqios',
//       },
//     ];
//     res.status(200).json(stuff); //ask completed
//   });

router.get('/:id', auth, stuffCtrl.getOneThing); //take one specific thing
router.put('/:id', auth, multer, stuffCtrl.modifyThing); //update Thing
router.delete('/:id', auth, stuffCtrl.deleteThing); //delete Thing
router.get('/', auth, stuffCtrl.getAllThings); //recup list Things in sell

module.exports = router; //export router