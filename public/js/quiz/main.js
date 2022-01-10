document.addEventListener('DOMContentLoaded', function() {

    const start = document.getElementById('start');
    start.addEventListener('click', () => startQuiz());

    function startQuiz() {
        localStorage.clear();

        const quiz = document.getElementById('quiz');
        clearElement(quiz);
        let questionOne = createQuestionOne();
        quiz.appendChild(questionOne);

        function waitResponceQuestionOne() {
            if (localStorage.getItem('userChoice')) {
                localStorage.setItem('userChoice', false);
                yourChoise = localStorage.getItem('yourChoice');
                answerQuestionOne(yourChoise);
                clearElement(quiz);
                questionResponce = localStorage.getItem('questionResponce')
                textContent = localStorage.getItem('textContent')
                responceQuestionOne = createResponce(textContent, questionResponce);
                quiz.appendChild(responceQuestionOne);
                localStorage.clear();
                let button = document.getElementById('questionTwo');
                if (button) {
                    button.addEventListener('click', initQuestionTwo, false);
                }
            } else {
                timeoutID = window.setTimeout(waitResponceQuestionOne, 1000);
            }
        }
        waitResponceQuestionOne();

        function initQuestionTwo() {
            clearElement(quiz);
            questionTwo = createQuestiontwo()
            quiz.appendChild(questionTwo);
        }

        function waitResponceQuestionTwo() {
            if (localStorage.getItem('userChoice')) {
                localStorage.setItem('userChoice', false);
                yourChoise = localStorage.getItem('yourChoice');
                answerQuestionTwo(yourChoise);
                clearElement(quiz);
                questionResponce = localStorage.getItem('questionResponce')
                textContent = localStorage.getItem('textContent')
                responceQuestionOne = createResponce(textContent, questionResponce);
                quiz.appendChild(responceQuestionOne);
                localStorage.clear();
            } else {
                timeoutID = window.setTimeout(waitResponceQuestionTwo, 1000);
            }
        }
        waitResponceQuestionTwo();


    }
});