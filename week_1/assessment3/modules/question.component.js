const createQuestion = ({ question, category, correctAnswer, incorrectAnswers,}) => {

    // Concat the answers and shuffle them
    const allAnswers = [correctAnswer, ...incorrectAnswers]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    const $question = document.createElement('section');

    // Here you will need to modify the code
    // Add an element with id "questionCategory" to the HTML and set the value to based on the category property
    $question.innerHTML = `
        <h1>${question}</h1>
        <div id="questionCategory">${category}</div>
        <form class="question-options" action="">
            <input type="radio" name="answer" id="answer1" value="${allAnswers[0]}">
            <label for="answer1">${allAnswers[0]}</label><br>

            <input type="radio" name="answer" id="answer2" value="${allAnswers[1]}">
            <label for="answer2">${allAnswers[1]}</label><br>

            <input type="radio" name="answer" id="answer3" value="${allAnswers[2]}">
            <label for="answer3">${allAnswers[2]}</label><br>

            <input type="radio" name="answer" id="answer4" value="${allAnswers[3]}">
            <label for="answer4">${allAnswers[3]}</label><br>

            <input id="submitAnswer" type="submit" value="Submit" />
        </form>
    `;

    // Handle the submission of the form and validate the answer
    const $form = $question.querySelector('.question-options');
    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        const answer = $form.querySelector('input[name="answer"]:checked').value;

        let $response = $question.querySelector('.question-response');
        console.log($response);
        if (!$response) {
            $response  = document.createElement('p');
        }
        $response.classList.add('question-response');

        $response.innerHTML = 'Sorry wrong answer';
        if (answer === correctAnswer) {
            $response.innerHTML = 'Correct !!';
        }

        $question.appendChild($response);
    });

    return $question;
}

export { createQuestion };