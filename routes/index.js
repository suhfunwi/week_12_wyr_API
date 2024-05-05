const express = require('express')
const router = express.Router
const randomWYRQuestion = require('../model/wyrquestions')
//gets the questions array form wyrquestions
router.get('/', function (req, res, next){
    res.send('Placeholder for home page')
})
router.get('/wyr', function (req, res, next){
    // // const wyr = {
    // //     'question': 'Play any musical instrument or speak any language?',
    // //     'answer1': 'Play any musical instrument',
    // //     'answer2': 'Speak any language'
    // }
    const wyr = randomWYRQuestion()
    res.json(wyr)
    //instead of render, this is basically the json version of it

})

module.exports = router