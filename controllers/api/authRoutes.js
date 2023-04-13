const router = require('express').Router();
const { Teacher } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const teacherData = await Teacher.findOne({ where: { username: req.body.username } });
    
        if (!teacherData) {
          res
            .status(404)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
    
        const validPassword = await teacherData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.teacher_id = teacherData.id;
          req.session.teacher_name = teacherData.teacher_name;
          req.session.logged_in = true;
          
          res.json({ teacherData: {
              teacher_name: teacherData.teacher_name,
              username: teacherData.username,
              id: teacherData.id
          }});
        });
    
      } catch (err) {
          console.log(err);
        res.status(400).json(err);
      }
});

router.post('/register', async (req, res) => {
    try {
        const teacherData = await Teacher.create(req.body);
    
        req.session.save(() => {
          req.session.teacher_id = teacherData.id;
          req.session.teacher_name = teacherData.teacher_name;
          req.session.logged_in = true;
    
          res.status(201).json({ teacherData: {
            teacher_name: teacherData.teacher_name,
            username: teacherData.username,
            id: teacherData.id
        }});
        });
      } catch (err) {
        res.status(400).json(err);
      }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(400).end();
    }
  });

module.exports = router;