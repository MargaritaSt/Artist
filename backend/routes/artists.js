const express = require('express');
const router = express.Router();

module.exports = (db) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    
    const query = {
      text: 'SELECT * FROM artist_list;'
    };

    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));

  });





  return router;
};
