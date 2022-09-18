import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';

const question = fetchQuestion().then( (value) => {
    const $question =  createQuestion(value);
    const $app = document.getElementById('app');
    $app.innerHTML = '';
    $app.appendChild($question);    
})
