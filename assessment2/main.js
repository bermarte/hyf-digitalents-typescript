import { encryptText } from './modules/encrypt.js';

const shift = document.getElementById('shift');
const plaintext = document.getElementById('plaintext');
const encryptedtext = document.getElementById('encryptedtext');


/* shift.addEventListener('change', function() {
    fillTextArea()
})

plaintext.addEventListener('input', function() {
    fillTextArea()
}) */
const events = ['change', 'input'];
[shift, plaintext].forEach(
   (element, index) => element.addEventListener(events[index],() => {
        fillTextArea()
   })
)

const fillTextArea = () => {
    encryptedtext.value = encryptText( onlyAlphabetical(), shift.value)
}

const onlyAlphabetical = () => {
    const filtered = plaintext.value.replace(/[^a-zA-Z]/g,'')
    return filtered
}