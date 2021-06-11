const router = require('express').Router()
const Recipe = require('./recipes_model')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslit-disable-line
    res.status(500).json({
        custom: 'something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router