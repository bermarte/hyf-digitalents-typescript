// Use type and mentioned in the name of the variable
// Assign an appropriate value
const aNumber: number = 5;
const aString: string = 'hello';
const aBigInt: bigint = 3422222222n;
const anArray: number[] = [1,2,3]
const anUnknown: unknown = undefined;
const anObject: object = {x: 'goodbye'};
const aTuple: [number, boolean] = [6, true];
enum anEnum {
    Up,
    Down
};

// Implement this function any type accordingly
function isEven(num: number): boolean {
    return num%2 == 0
}

// Type the following following function and variable
type Person = {
    name: string
}

type Developer = {
    role: string
}

const jane: Person = {
    name: 'Jane'
}

const joe: Developer = {
    role: 'Devops'
}

const people: (Person| Developer)[] =  [
    jane, joe
]

function printPeople(people: object[]): void {
    // Print the name of person or the role in this function
    people.forEach(x => {
        console.log(x.name || x.role)
    });
}

// Type the encrpyt function correctly
const encryptText = (plainText: string, shift: number): string => {
    let cipherArr: string[string] = []
    let cipherLetter: number

    plainText.split("").map(letter => {
      let code: number = letter.charCodeAt(+letter)
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

console.log(encryptText('abc', 3))


// Solve using a literal union type
let vegetable: "Cucumber" | "Eggplant" | "Cabbage"; // :Vegetable:
vegetable = "Cucumber";
vegetable = "Eggplant";
vegetable = "Cabbage";


// Solve the following exercise with an intersection type
type Complainer = {
    complains: () => void
}

type Beerdrinker = {
    drinkBeer: () => void
}

type ChocolateLover = {
    eatChocolate: () => void
}

type Belgian = Complainer & Beerdrinker & ChocolateLover;
function doBelgianThings(belgian: Belgian): void
{
    belgian.complains();
    belgian.drinkBeer();
    belgian.eatChocolate();
}

module.exports = {
    isEven,
    print,
    encryptText
};