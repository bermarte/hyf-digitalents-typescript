import { fetchQuestion } from './modules/question.api.js';

test('test it can fetches a question', () => {
    const question = fetchQuestion();

    expect(question).toMatchObject({
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
      });
});