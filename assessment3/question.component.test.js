import { createQuestion } from './modules/question.component.js';

test('test it creates a question', () => {
    const $question = createQuestion(
      {
        "category": "Geography",
        "id": "622a1c3c7cc59eab6f951afd",
        "correctAnswer": "Romania",
        "incorrectAnswers": [
          "Poland",
          "Ireland",
          "France"
        ],
        "question": "In Which Modern Day Country Would You Find The Region Known As Transylvania?",
        "tags": [
          "geography"
        ],
        "type": "Multiple Choice",
        "difficulty": "hard",
        "regions": []
      }
    );

    document.body.appendChild($question);

    expect(document.getElementById('answer1')).not.toBeNull();
    expect(document.getElementById('answer2')).not.toBeNull();
    expect(document.getElementById('answer3')).not.toBeNull();
    expect(document.getElementById('answer4')).not.toBeNull();
});

test('test a category is present', () => {
  const $question = createQuestion(
    {
      "category": "Geography",
      "id": "622a1c3c7cc59eab6f951afd",
      "correctAnswer": "Romania",
      "incorrectAnswers": [
        "Poland",
        "Ireland",
        "France"
      ],
      "question": "In Which Modern Day Country Would You Find The Region Known As Transylvania?",
      "tags": [
        "geography"
      ],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": []
    }
  );

  document.body.appendChild($question);

  expect(document.getElementById('questionCategory')).not.toBeNull();
});