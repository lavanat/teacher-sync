const router = require('express').Router();
const { Op } = require('sequelize');
const { Grade } = require('../../models');

router.get('/:startDate/:endDate', async (req, res) => {
    const {startDate, endDate} = req.params;

    if(!startDate || !endDate) {
        res.status(400).json({
            error: "You need to provide both start and end dates"
        });
        return;
    }

    try {
        const grade = await Grade.findAll({
            where: {
                "class_date": {
                    [Op.between]: [new Date(startDate), new Date(endDate)]
                }
            }
        });

        res.status(200).json(grade);
    } catch (err) {
        res.status(400).json({
            error: err,
            message: "There was an error getting data from DB"
        });
    }
});

router.post('/update', async (req, res) => {
    try {
        const {student_id, grade, grade_id, class_date} = req.body;

        if(!grade_id) {
            // this is new POST ATTENDANCE
            const gradeDate = await Grade.create({
                student_id,
                grade,
                class_date
            });
    
            res.status(201).json(gradeDate);
    
        } else {
            // this is an update
            const gradeDate = await Grade.update({ grade }, {
                where: {
                    grade_id
                }
            });

            res.status(204).json(gradeDate);

        }
    } catch(err) {
        res.status(400).json({
            error: err,
            message: err.message
        })
    }
    
})

module.exports = router;