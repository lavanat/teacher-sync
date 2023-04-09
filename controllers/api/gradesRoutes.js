const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log("GRADESS ROUTER WAS CALLED");
    res.json("GRADES ARE GOOD")
});

router.post('/', async (req, res) => {
    console.log("POST GRADES WAS HIT");
    res.json("POST GRADES")
})

module.exports = router;