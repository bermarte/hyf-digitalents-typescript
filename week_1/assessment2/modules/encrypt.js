export const encryptText = (plainText, shift) => {
    let cipherArr = []
    let cipherLetter

    plainText.split("").map(letter => {
      let code = letter.charCodeAt(letter)
      if(letter === " ") {
        return cipherArr.push(letter)
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65)
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
      }
      return cipherArr.push(cipherLetter)
    })  
    return cipherArr.join("")
}

// module.exports = { encryptText };