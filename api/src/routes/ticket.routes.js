const router = require('express-promise-router')();
const ticketController = require('../controllers/ticket.controller');

router.post('/tickets/', ticketController.generateTicket);

router.get('/tickets/', ticketController.listAllTickets);

router.get('/tickets/:id', ticketController.listTicketsById);

router.put('/tickets/:id', ticketController.updateTicket);



module.exports = router;