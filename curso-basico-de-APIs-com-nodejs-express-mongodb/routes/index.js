const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
    return res.send({message: 'tudo ok com o get.'})
});

router.post('/', auth, (req, res) => {
    return res.send({message: 'tudo ok com o post.'})
});

module.exports = router;