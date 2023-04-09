const router = require('express').Router();
const { Student } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const students = await Student.findAll();

        res.status(200).json(students);

    } catch (err) {
        res.status(400).json({
            error: err.message,
            message: "There was an error getting data from DB"
        });
    }
})

router.post('/', async (req, res) => {
    try {
        
        const studentDate = await Student.create(req.body);

        res.status(201).json(studentDate);

    } catch(err) {
        res.status(400).json({
            error: err.message,
            message: "There was an error saving student"
        });
    }
});

router.delete('/', async (req, res) => {
    try {

        const studentDate = await Student.destroy({
            where: {
                id: req.body.id
            }
        });

        res.status(201).json(studentDate);

    } catch(err) {
        res.status(400).json({
            error: err.message,
            message: "There was an error deleting student"
        });
    }
})

module.exports = router;