type Question = {
    "id": string
}

// Fetch a set of questions from https://the-trivia-api.com/api/questions?limit=5
// Filter out any questions with tag "film"
// Sort them according to the difficulty
// Log the output to the user

// Sample Output:
// Who succeeded Winston Churchill when he resigned in 1955?
// Which author wrote 'The Left Hand of Darkness'?
// Who was the first female American astronaut?

//https://stackoverflow.com/questions/41103360/how-to-use-fetch-in-typescript

async function api(url: string) {
  const response = await fetch(url)
  const data = await response.json();
  return data;
}
const triviaUrl: string =  'https://the-trivia-api.com/api/questions?limit=50'

function FilmTv(item) {
    if (item.category === 'Film & TV') return true
}
function range(item) {
    if (item.difficulty === 'hard') item.range = 1
    if (item.difficulty === 'medium') item.range = 2
    if (item.difficulty === 'easy') item.range = 3
    return item
}

const difficulty = ['hard', 'medium', 'easy']
api(triviaUrl).then(function(result) {
   //filter
   const setQuestions = result.filter(FilmTv)
   const setRange = setQuestions.map(range)
   // sort
   setRange.sort((a, b) => {
    return a.range - b.range;
    });
    setRange.map(element => {
        const obj = {
            question: element.question,
            difficulty: element.difficulty
        }
        console.log(`${obj.question} (${obj.difficulty})`)
    })
})
