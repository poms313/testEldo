function createChoice(nameOne, nameTwo, text, answerNumber) {
    let newquestion = answerNumber + ': ' + nameOne + text + nameTwo;
    let p = document.createElement('p');
    p = document.createElement('p');
    p.textContent = newquestion;
    return p
}

function createQuestionHtml(a, b, c, d, e, title, id) {
    let div = document.createElement('div');
    div.classList.add('grey');
    div.classList.add('padding');
    div.classList.add('margin');
    div.appendChild(a);
    div.appendChild(b);
    div.appendChild(c);
    div.appendChild(d);
    div.appendChild(e);
    let hr = document.createElement('div');
    hr.textContent = '- - -';
    div.appendChild(hr);
    let h2 = document.createElement('h2');
    h2.textContent = title;
    h2.id = id;
    h2.classList = 'questionText';
    div.appendChild(h2);
    let trueAnswer = document.createElement('p');
    trueAnswer.textContent = 'Vrai';
    trueAnswer.classList.add('customButton');
    trueAnswer.setAttribute('onclick', 'getUserChoise(this.id)');
    trueAnswer.id = 'trueAnswer';
    div.appendChild(trueAnswer);
    falseAnswer = document.createElement('p');
    falseAnswer.textContent = 'Faux';
    falseAnswer.classList.add('customButton');
    falseAnswer.id = 'falseAnswer';
    falseAnswer.setAttribute('onclick', 'getUserChoise(this.id)');
    div.appendChild(falseAnswer);
    return div
}

function getUserChoise(clicked_id) {
    if (clicked_id === 'trueAnswer') {
        localStorage.setItem('yourChoice', true);
    }
    if (clicked_id === 'falseAnswer') {
        localStorage.setItem('yourChoice', false);
    }
    localStorage.setItem('userChoice', true);

}

function createResponce(textContent, questionResponce) {
    div = document.createElement('div');
    p = document.createElement('p');
    p.textContent = textContent;
    div.appendChild(p);

    if (questionResponce === 'true') {
        button = document.createElement('p');
        button.classList.add('customButton');
        button.id = 'questionTwo';
        button.textContent = 'Continuer';
        div.appendChild(button);

    }
    return div

}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}