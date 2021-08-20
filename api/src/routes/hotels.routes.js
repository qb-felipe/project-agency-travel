const router = require('express-promise-router')();
const hotelsController = require('../controllers/hotels.controller');

router.get('/hotels', hotelsController.listAllHotels);

router.post('/hotels', hotelsController.addHotel);

router.put('/hotels/:id', hotelsController.changeHotel)


module.exports = router;