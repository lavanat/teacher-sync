const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

    if (req.session.logged_in) {
        console.log('ALREADY LOGGED IN')
        res.redirect('/grades');
        return
    }

    try {
    //   // Get all projects and JOIN with user data
    //   const projectData = await Project.findAll({
    //     include: [
    //       {
    //         model: User,
    //         attributes: ['name'],
    //       },
    //     ],
    //   });
  
      // Serialize data so the template can read it
    //   const projects = projectData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/grades');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/register', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/grades');
      return;
    }
  
    res.render('register');
  });

  router.get('/grades', withAuth, async (req, res) => {
      res.render('grades', {
        logged_in: req.session.logged_in,
        teacher_name: req.session.teacher_name
      })
  });

  router.use('/attendance', withAuth, async (req, res) => {
    res.render('attendance',{
        logged_in: req.session.logged_in,
        teacher_name: req.session.teacher_name
      });
});

router.use('/conduct', withAuth, async (req, res) => {
  res.render('conduct',{
      logged_in: req.session.logged_in,
      teacher_name: req.session.teacher_name
    });
});

router.use('/students', withAuth, async (req, res) => {
  res.render('students',{
      logged_in: req.session.logged_in,
      teacher_name: req.session.teacher_name
    });
});

  module.exports = router;