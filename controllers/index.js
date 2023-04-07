const router = require("express").Router();

router.use('/api',require('./api'));
router.use('/', require('./views/homeRoutes'));

module.exports = router;