const router = require('express').Router();
const { Router } = require('express');
const Students = require('../../models/student');

// GET all students
router.get('/', async (req, res) => {
  try {
    const studentsDATA = await Students.findAll();
    res.status(200).json(studentsDATA);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;