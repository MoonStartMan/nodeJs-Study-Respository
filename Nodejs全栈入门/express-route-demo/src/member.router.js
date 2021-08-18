const express = require('express')

const router = express.Router()

// router
//     .[method]   //  get/post

// router.all

// router.use

router.get('/list', (req, res) => {
    res.json({
        list: [
            {
                id: 001,
                name: "李四",
            }
        ]
    })
})

module.exports = router;