function createQuestionOne() {
    let a = createChoice(benjamin.name, paul.name, " est ami avec ", "a");
    let b = createChoice(sophie.name, moi.name, " est amie avec ", "b");
    let c = createChoice(moi.name, benjamin.name, " est ami avec ", "c");
    let d = createChoice(paul.name, aurore.name, " est ami avec ", "d");
    let e = createChoice(aurore.name, sophie.name, " est amie avec ", "e");
    let title = "Est-ce que Sophie est amie avec moi ?";
    questionOne = createQuestionHtml(a, b, c, d, e, title, 1);
    return questionOne
}

function answerQuestionOne(yourChoise) {
    let titleQuestion = [];
    titleQuestion = document.getElementsByClassName('questionText');
    let textQuestion = titleQuestion[0].outerText;
    let moiName = moi.name;
    let sophieName = sophie.name;

    if (textQuestion.includes(moiName)) {
        name1 = moi;
    }
    if (textQuestion.includes(sophieName)) {
        name2 = sophie;
    }
    resultCheckRelation = checkRelation(name1.relation, name2.name);
    if (resultCheckRelation === true) {
        checkYourChoice(yourChoise);
    }

    function checkYourChoice(yourChoise) {
        if (yourChoise == "true") {
            localStorage.setItem('textContent', 'Félicitation, Sophie et moi sommes bien amies (voir b: "b: Sophie est amie avec moi"). Facile pour commencer, on va un peu compliquer!');
            localStorage.setItem('questionResponce', true);
        } else {
            localStorage.setItem('textContent', 'Désolé, Sophie et moi sommes bien amies (voir b: "b: Sophie est amie avec moi")!. Il faut recommencer!');
            localStorage.setItem('questionResponce', false);
        }
    }
}

function createQuestiontwo() {
    let a = createChoice(benjamin.name, paul.name, " est ami avec ", "a");
    let b = createChoice(franck.name, paul.name, " est amie avec ", "b");
    let c = createChoice(mathieu.name, aurore.name, " est ami avec ", "c");
    let d = createChoice(sophie.name, moi.name, " est amie avec ", "d");
    let e = createChoice(moi.name, benjamin.name, " est amie avec ", "e");
    let title = "Est-ce que Mathieu est mon ami ?";
    questionTwo = createQuestionHtml(a, b, c, d, e, title, 1);
    return questionTwo
}

function answerQuestionTwo(yourChoise) {
    let titleQuestion = [];
    titleQuestion = document.getElementsByClassName('questionText');
    let textQuestion = titleQuestion[0].outerText;
    let moiName = moi.name;
    let mathieuName = mathieu.name;

    if (textQuestion.includes(moiName)) {
        name1 = moi;
    }
    if (textQuestion.includes(mathieuName)) {
        name2 = mathieu;
    }
    resultCheckRelation = checkRelation(name1.relation, name2.name);
    if (resultCheckRelation === true) {
        checkYourChoice(yourChoise);
    }

    function checkYourChoice(yourChoise) {
        if (yourChoise == "false") {
            localStorage.setItem('textContent', 'Félicitation, Mathieu et moi ne sommes pas amis (Mathieu a aucune relation sauf avec Aurore et pareil pour Aurore). Félicitations vous avez réussi le quiz avec une note de 2/2!');
            localStorage.setItem('questionTwoResponce', false);
        } else {
            localStorage.setItem('textContent', 'Désolé, Mathieu et moi ne sommes pas amis (Mathieu a aucune relation sauf avec Aurore et pareil pour Aurore)!. Il faut recommencer!');
            localStorage.setItem('questionTwoResponce', true);
        }
    }
}