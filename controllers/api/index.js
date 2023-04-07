const router = require("express").Router();

router.use('/users',require('./userRoutes.js'));
router.use('', require('./authRoutes'));

module.exports = router;