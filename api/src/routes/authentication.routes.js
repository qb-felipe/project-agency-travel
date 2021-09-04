const router = require('express-promise-router')();
const authenticationControler = require('../controllers/authentication.controller');

router.post('/authentication', authenticationControler.loginAuthentication);

module.exports = router;