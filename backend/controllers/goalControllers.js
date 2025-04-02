let asyncHandler = require('express-async-handler')  

let Goal = require('../models/goalModel')

//@desc   Get goals
//@route  Get/api/goals
//@access Private
let getGoals = asyncHandler(async (req , res) => {
    let goals = await Goal.find()

    res.status(200).json(goals)
})

//@desc   Set goal
//@route  Post /api/goals
//@access Private
let setGoal = asyncHandler(async (req , res) => {
if ( !req.body.text){
    res.status(400);
    throw new Error('Please add a text field')
}

let goal = await Goal.create({
    text: req.body.text
}) 

    res.status(200).json(goal)

})
//@desc   Update goals
//@route  Put/api/goals/:id
//@access Private
let UpdateGoal = asyncHandler(async (req , res) => {
let goal = await Goal.findById(req.params.id)

if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
}

let updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
})

    res.status(200).json(updatedGoal)


})
//@desc   Delete goal
//@route  Delete /api/goals/:id 
//@access Private
let deleteGoal = asyncHandler(async (req , res) => {
    let goal = await Goal.findById(req.params.id)

if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
}

await goal.deleteOne()

    res.status(200).json({id: req.params.id })
})


module.exports = {
    getGoals,
    setGoal,
    UpdateGoal,
    deleteGoal,
}