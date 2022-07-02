const router = require('express').Router();
const { registerUser } = require('../controllers/Users.Controllers');


router.post('/register', registerUser)

module.exports = router;