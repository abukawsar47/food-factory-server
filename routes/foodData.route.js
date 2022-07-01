const express = require('express');

const router = express.Router()
router.get('/', (req, res) => {
    res.status(200).send({ message: "all foods" })
})

router.post('/',)


module.exports = router;