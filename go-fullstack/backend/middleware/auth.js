const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

/*vous avez ajouté un modèle de données User afin de stocker les informations utilisateur dans votre base de données ;

vous avez implémenté le cryptage de mot de passe sécurisé afin de stocker en toute sécurité les mots de passe utilisateur ;

vous avez créé et envoyé des tokens au front-end pour authentifier les requêtes ;

vous avez ajouté le middleware d'authentification pour sécuriser les routes dans votre API. De cette façon, seules les requêtes authentifiées seront gérées.*/