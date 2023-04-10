const router = require("express").Router();

// router.use('/users',require('./userRoutes.js'));
router.use('/attendance', require('./attendanceRoutes'));
router.use('/grades', require('./gradesRoutes'));
router.use('/auth', require('./authRoutes'));
router.use('/student', require('./studentRoutes'));
router.use('/conduct', require('./conductRoutes'));


module.exports = router;