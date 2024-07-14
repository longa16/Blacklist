const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const controller = require('./controller');
const validationMiddleware = require('./validation');


router.post('/blacklist',
  [
    check('From', 'phone number is required').not().isEmpty(),
    check('Message', 'Message is required').not().isEmpty()
  ],
  validationMiddleware,
  controller.add_Blacklist
);


router.get('/blacklist', controller.get_Blacklist);


router.get('/blacklist/:phoneNumber', controller.is_Blacklisted);

module.exports = router;
