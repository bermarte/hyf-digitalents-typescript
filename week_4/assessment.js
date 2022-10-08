console.log('click any key to start');
var readline = require('readline');
// JS interface
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var messages = [
    'With which box do you want to interact? (1) Small Box, (2) Big Box\n',
    'What do you want to do? (1) add an item, (2) remove an item, (3) empty the box\n',
    'The box is currently empty!\n',
    'What item do you want to add? (1) Paper, (2) Pencil\n',
    'What is the size?\n',
    'What is the weight?\n',
    'You didn\'t provide any input\n'
];
// rl.question(messages[0],(input: string): any => {
//     response = input
//     if (!input.length) {
//         console.log(messages[messages.length-1])
//         rl.close()
//     } 
//     else if (input === '1') {
//         console.log('Small Box')
//     } else if (input === '2') {
//         console.log('Big Box')
//     }
//     outside()
// })
//let choices: '1' | '2'
/* rl.on('line', (input: string) => {
    console.log('click any key to start')
    rl.setPrompt(messages[0]);
    rl.question(messages[0], (answer1: string) => {
        rl.question(messages[1], (answer2: string) => {
            log(answer1);
            log(answer2);
            // var result = (+answer1) + (+answer2);
            // console.log(`The sum of above two numbers is ${result}`);
            //rl.close();
            console.log('click any key to start again')
        });
    });
    
})
rl.on('close', function() {
    console.log("Finished");
})


const log = function(input: string){
    console.log(`Received: '${input}'`);
    //rl.close()
} */
var log = function (input) {
    console.log("Received: '".concat(input, "'"));
};
rl.prompt();
rl.on('line', function (line) {
    if (line.toLowerCase() === "exit") {
        process.exit(0);
    }
    // rl.question(messages[0], (answer1: string) => {
    // });
    // game.render();
    // game.command(line.trim());
    rl.prompt();
}).on('close', function () {
    console.log('Bye!');
    process.exit(0);
});
var Box = /** @class */ (function () {
    function Box() {
        this.coll = [];
    }
    return Box;
}());
var Size;
(function (Size) {
    Size[Size["A4"] = 0] = "A4";
    Size[Size["A5"] = 1] = "A5";
    Size[Size["A6"] = 2] = "A6";
    Size[Size["A7"] = 3] = "A7";
})(Size || (Size = {}));
// small box
var smallBox = new Box();
smallBox.addBox = function (x) {
    smallBox.coll.push(x);
};
smallBox.getBox = function () {
    if (!(smallBox === null || smallBox === void 0 ? void 0 : smallBox.coll.length))
        return 'empty';
    return smallBox.coll;
};
// big box
var bigBox = new Box();
bigBox.addBox = function (x) {
    bigBox.coll.push(x);
};
bigBox.getBox = function () {
    if (!(bigBox === null || bigBox === void 0 ? void 0 : bigBox.coll.length))
        return 'empty';
    return bigBox.coll;
};
// newbox.addBox({thing1: 42, weight: 20})
// newbox.addBox({thing2: 222, weight: 12})
//console.log(newbox.getBox())
