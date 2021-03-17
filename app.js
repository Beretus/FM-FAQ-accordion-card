document.querySelectorAll(".question").forEach(question => {question.addEventListener('click', (e) => {
        question.lastChild.classList.toggle('arrowAnimation');
        question.nextElementSibling.classList.toggle('showItem');
        question.classList.toggle('activeQuestion');
})});