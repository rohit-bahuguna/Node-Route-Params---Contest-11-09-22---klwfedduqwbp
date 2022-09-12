const { Router } = require('express');
const router = Router();


router.get('/:name/:age', async (req, res, next) => {
    const { name , age } = req.params
    res.status(200).json({
        message: `Hello ${name}, you are ${age} years old`
    })
})
module.exports = router;