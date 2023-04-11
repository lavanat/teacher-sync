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
        logged_in: req.session.logged_in,
        Homecss: true, 
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
  
    res.render('login',{
      Logincss: true, 
    });

  });
  
  router.get('/register', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/grades');
      return;
    }
  
    res.render('register',{
      Registercss: true,
    });
  });

  router.get('/grades', withAuth, async (req, res) => {
      res.render('grades', {
        logged_in: req.session.logged_in,
        teacher_name: req.session.teacher_name,
        Gradescss: true,
      })
  });

  router.use('/attendance', withAuth, async (req, res) => {
    res.render('attendance',{
        logged_in: req.session.logged_in,
        teacher_name: req.session.teacher_name,
        Attendancecss: true,
      });
});

router.use('/conduct', withAuth, async (req, res) => {
  res.render('conduct',{
      logged_in: req.session.logged_in,
      teacher_name: req.session.teacher_name,
      Conductcss: true,
    });
});

router.use('/students', withAuth, async (req, res) => {
  res.render('students',{
      logged_in: req.session.logged_in,
      teacher_name: req.session.teacher_name,
      Studentcss: true,
    });
});

  module.exports = router;