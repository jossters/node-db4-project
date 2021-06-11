const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({ api: 'up'})
})

router.use((err, req, res, next) => { //eslit-disable-line
    res.status(500).json({
        custom: 'something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router