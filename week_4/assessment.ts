const readline: any = require('readline')


class Box<T> {
  coll: Array<T> = [];
  addBox?: (x: T) => T;
  /* addBox?: (x: T) => T;
  removeBox?: () => T;
  getBox?: (x: T) => T; */
}

const enum Size {
    A4 = 'A4',
    A5 = 'A5',
    A6 = 'A6',
    A7 = 'A7'
}

const enum Tv {
    LCD = 'LCD',
    OLED = 'OLED'
}

// small box
let smallBox = new Box<any>();
smallBox.addBox = function (x) {
    smallBox.coll.push(x) 
}
/* 
};
smallBox.getBox = function () {
    console.log('hey')
    if (!smallBox?.coll.length)
        return 'NOTHING THERE'
    else {
        return smallBox.coll
    }
}; */

// big box
let bigBox = new Box<any>();
/* bigBox.addBox = function (x) {
    bigBox.coll.push(x) 
};
bigBox.getBox = function () {
    if (!bigBox?.coll.length)
        return 'empty'
    return bigBox.coll
};
 */


// JS interface
const rl: any = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var util = require('util');
const question = (...args: any) => new Promise((res, rej) => rl.question(...args, res))
let box: any, todo: any, what: any, size: any, weight: any, obj: any, capacity: any, typeTv: any
async function question1() {
        try {
            while (box !== '1' && box !== '2') {
                box = await question('With which box do you want to interact? (1) Small Box, (2) Big Box\n')
            }
            
            question2()
        } catch (err) {
            console.error('Question rejected', err);
        }
    
}

const restart = () => {
    box= 0
    todo=0
    what= 0
    size = 0
    weight = 0
    obj = 0
    capacity = 0
    typeTv = 0
}
async function question2() {

        try {
            while (todo !== '1' && todo !== '2' && todo !== '3') {
                todo = await question('What do you want to do? (1) add an item, (2) remove an item, (3) empty the box\n')
            }
            
            // small box
            if (todo === '1' && box === '1') {
                return question3()
            } else if (todo === '1' && box === '2') {
                return question3b()
            }
            if (todo === '2' && box === '1') {
                if (!smallBox.coll.length) {
                    console.log('The small box is currently empty!')
                } else {
                    smallBox.coll.shift()
                    console.table(smallBox.coll)
                }
            }
            if (todo === '3' && box === '1') {
                smallBox.coll.length = 0
                console.log('the small box is now empty')
            }
            // big box
            if (todo === '2' && box === '2') {
                if (!bigBox.coll.length) {
                    console.log('The big box is currently empty!')
                } else {
                    bigBox.coll.shift()
                    console.table(bigBox.coll)
                }
            }
            if (todo === '3' && box === '2') {
                bigBox.coll.length = 0
                console.log('the small box is now empty')
            }
            restart()
            return question1()

        } catch (err) {
            console.error('Question rejected', err);
        }  
}
async function question3() {
        try {
            while (what !== '1' && what !== '2') {
                what = await question( 'What item do you want to add? (1) Paper, (2) Pencil\n')
            }
    
            if (what === '1' && box === '1') {
                obj = 'paper'
                return question4()
            }
            if (what === '2' && box === '1') {
                obj = 'pencil'
                // console.log('add pencil')
                return question4()
            }
            return
        } catch (err) {
            console.error('Question rejected', err);
        }  
}

async function question3b() {
        try {
            while (what !== '1' && what !== '2') {
                what = await question( 'What item do you want to add? (1) TV, (2) Speaker\n')
            }
            if (what === '1' && box === '2') {
                obj = 'TV'
                // console.log('you want to add a TV')
                return question4b()
            }
            if (what === '2' && box === '2') {
                obj = 'Speaker'
                // console.log('you want to add a Speaker')
                return question4b()
            }
        } catch (err) {
            console.error('Question rejected', err);
        }  
}

async function question4() {
        try {
            if (obj === 'paper') {
                while (size !== Size.A4 && size !== Size.A5 && size !== Size.A6 && size !== Size.A7) {
                    size = await question( 'What is the size? (choose between A4, A5, A6, A7)\n')
                }              
            } 
            
            return question5()
        } catch (err) {
            console.error('Question rejected', err);
        }  
}

async function question4b() {
        try {
            if (obj === 'TV') {
                while (typeTv !== Tv.LCD && typeTv !== Tv.OLED) {
                    typeTv = await question( 'What is the type? (choose between LCD and OLED)\n')
                }
            }
            if (obj === 'Speaker') {
                capacity = await question( 'What is the capacity?\n')
            }
            return question5()
        } catch (err) {
            console.error('Question rejected', err);
        }  
}

async function question5() {
        try {
            weight = await question( 'What is the weight?\n')
            if (box === '1' && obj === 'paper') {
                smallBox.coll.push({obj, size, weight})
                console.table(smallBox.coll)
                //return question1()
            } 
            else if (box === '1' && obj === 'pencil') {
                smallBox.coll.push({obj, weight})
                console.table(smallBox.coll)
            }
            else if (box === '2') {
                if (obj === 'TV') {
                    bigBox.coll.push({obj, typeTv, weight})
                }
                else if (obj === 'Speaker') {
                    bigBox.coll.push({obj, capacity, weight})
                }
                
                console.table(bigBox.coll)
            }
            restart()
            return question1()
        } catch (err) {
            console.error('Question rejected', err);
        }  
}
question1()
