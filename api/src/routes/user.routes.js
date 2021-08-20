const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

router.get('/users', userController.listAllUsers);

router.get('/users/:id', userController.listUsersById);

router.post('/users/', userController.createUser);

router.put('/users/:id', userController.updateUser);

// router.put('/users/:id', userController.disableUser);

module.exports = router;