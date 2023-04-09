const router = require('express').Router();
const { Op } = require('sequelize');
const { Attendance } = require('../../models');

router.get('/:startDate/:endDate', async (req, res) => {
    const {startDate, endDate} = req.params;

    if(!startDate || !endDate) {
        res.status(400).json({
            error: "You need to provide both start and end dates"
        });
        return;
    }

    try {
        const attendance = await Attendance.findAll({
            where: {
                "class_date": {
                    [Op.between]: [new Date(startDate), new Date(endDate)]
                }
            }
        });

        res.status(200).json(attendance);
    } catch (err) {
        res.status(400).json({
            error: err,
            message: "There was an error getting data from DB"
        });
    }
});

router.post('/update', async (req, res) => {
    try {
        const {student_id, attendance, attendance_id, class_date} = req.body;

        if(!attendance_id) {
            // this is new POST ATTENDANCE
            const attendanceDate = await Attendance.create({
                student_id,
                attendance,
                class_date
            });
    
            res.status(201).json(attendanceDate);
    
        } else {
            // this is an update
            const attendanceDate = await Attendance.update({ attendance }, {
                where: {
                    attendance_id
                }
            });

            res.status(204).json(attendanceDate);

        }
    } catch(err) {
        res.status(400).json({
            error: err,
            message: err.message
        })
    }
    
})

module.exports = router;