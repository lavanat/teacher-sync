const router = require('express').Router();
const { Op } = require('sequelize');
const { Conduct } = require('../../models');

router.get('/:startDate/:endDate', async (req, res) => {
    const {startDate, endDate} = req.params;

    if(!startDate || !endDate) {
        res.status(400).json({
            error: "You need to provide both start and end dates"
        });
        return;
    }

    try {
        const conduct = await Conduct.findAll({
            where: {
                "class_date": {
                    [Op.between]: [new Date(startDate), new Date(endDate)]
                }
            }
        });

        res.status(200).json(conduct);
    } catch (err) {
        res.status(400).json({
            error: err,
            message: "There was an error getting data from DB"
        });
    }
});

router.post('/update', async (req, res) => {
    try {
        const {student_id, conduct, conduct_id, class_date} = req.body;

        if(!conduct_id) {
            // this is new POST Conduct
            const conductDate = await Conduct.create({
                student_id,
                conduct,
                class_date
            });
    
            res.status(201).json(conductDate);
    
        } else {
            // this is an update
            const conductDate = await Conduct.update({ conduct }, {
                where: {
                    conduct_id
                }
            });

            res.status(204).json(conductDate);

        }
    } catch(err) {
        res.status(400).json({
            error: err,
            message: err.message
        })
    }
    
})

module.exports = router;