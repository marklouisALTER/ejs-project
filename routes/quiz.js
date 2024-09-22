const express = require('express');
const quizRouter = express.Router();
const quizData = require('../questions');

// fetch the quiz questions and options
quizRouter.get('/quiz', (req, res) => {
    res.render('quiz', { title: 'Quiz', quizData });
});


// submit the quiz
quizRouter.post('/submit-quiz', (req, res) => {
    const userAnswers = req.body;  // Get user's answers from the form
    let score = 0;

    quizData.forEach((quiz, index) => {
        const userAnswer = userAnswers[`answer${index}`]; // Get user's answer for each question
        if (userAnswer === quiz.answer) {
            score++; // Increase score if the answer is correct
        }
    });

    // Render quiz result page
    res.render('quiz-result', { title: 'Quiz Result', score, totalQuestions: quizData.length });
});

module.exports = quizRouter;