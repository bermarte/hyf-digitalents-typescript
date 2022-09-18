const fetchQuestion = () => {
   const url = 'https://the-trivia-api.com/api/questions'
   return fetch(url)
    .then(res => {return res.json()})
    .then(res => {
        return res[0]
    }) 
    .catch(err => {
        console.log(err.message)
    })
}

export { fetchQuestion };