let express = require('express')
let router = express.Router()
let { 
    getGoals,
    setGoal,
    UpdateGoal,
    deleteGoal,
} = require('../controllers/goalControllers')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(UpdateGoal)

module.exports = router
