const readline = require("readline");

class Box<T> {
  coll: Array<T> = [];
  addItem?: (x: T) => T;
  removeItem?: () => T;
  getBox?: (x: T) => T;
}

const enum Size {
  A4 = "A4",
  A5 = "A5",
  A6 = "A6",
  A7 = "A7",
}

const enum Tv {
  LCD = "LCD",
  OLED = "OLED",
}

const enum BoxType {
  Small = 1,
  Big,
}

type ItemType = {
  obj: string;
  typeTv?: string;
  capacity?: string;
  weight: number;
  size?: string;
};

class Item {
  obj: string;
  weight: number;
  constructor(obj: string, weight: number) {
    this.obj = obj;
    this.weight = weight;
  }
}

class Paper extends Item {
  size: string;
  constructor(obj: string, size: string, weight: number) {
    super(obj, weight);
    this.size = size;
  }
}

class Pencil extends Item {}

class Tele extends Item {
  typeTv: string;
  constructor(obj: string, typeTv: string, weight: number) {
    super(obj, weight);
    this.typeTv = typeTv;
  }
}

class Speak extends Item {
  capacity: string;
  constructor(obj: string, capacity: string, weight: number) {
    super(obj, weight);
    this.capacity = capacity;
  }
}

// small box
let smallBox = new Box<Paper | Pencil | void[] | void>();
smallBox.addItem = function (x): void {
  smallBox.coll.push(x);
};
smallBox.removeItem = function (): void {
  smallBox.coll.shift();
};

smallBox.getBox = function (x: Paper | Pencil | void[] | void): void {
  return console.table(x);
};

// big box
let bigBox = new Box<Tele | Speak | void[] | void>();
bigBox.addItem = function (x): void {
  bigBox.coll.push(x);
};

bigBox.removeItem = function (): void {
  bigBox.coll.shift();
};

bigBox.getBox = function (x: Tele | Speak | void[] | void): void {
  return console.table(x);
};

// JS interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

var util = require("util");
const question = (...args: string[]) =>
  new Promise((res: unknown, rej: unknown) => rl.question(...args, res));

let box: unknown,
  todo: unknown,
  what: unknown,
  size: unknown,
  weight: number,
  obj: unknown,
  capacity: unknown,
  typeTv: unknown;

async function question1() {
  try {
    while (box !== BoxType.Small.toString() && box !== BoxType.Big.toString()) {
      box = await question(
        "With which box do you want to interact? (1) Small Box, (2) Big Box\n"
      );
    }

    question2();
  } catch (err) {
    console.error("Question rejected", err);
  }
}

const restart = () => {
  box = 0;
  todo = 0;
  what = 0;
  size = 0;
  weight = 0;
  obj = 0;
  capacity = 0;
  typeTv = 0;
};

async function question2() {
  try {
    while (todo !== "1" && todo !== "2" && todo !== "3") {
      todo = await question(
        "What do you want to do? (1) add an item, (2) remove an item, (3) empty the box\n"
      );
    }

    // small box
    if (todo === "1" && box === BoxType.Small.toString()) {
      return question3();
    } else if (todo === "1" && box === "2") {
      return question3b();
    }
    if (todo === "2" && box === BoxType.Small.toString()) {
      if (!smallBox.coll.length) {
        console.log("The small box is currently empty!");
      } else {
        smallBox.removeItem!();
        smallBox.getBox!(smallBox.coll as []);
      }
    }
    if (todo === "3" && box === BoxType.Small.toString()) {
      smallBox.coll.length = 0;
      console.log("the small box is now empty");
    }
    // big box
    if (todo === "2" && box === BoxType.Big.toString()) {
      if (!bigBox.coll.length) {
        console.log("The big box is currently empty!");
      } else {
        bigBox.removeItem!();
        bigBox.getBox!(bigBox.coll as []);
      }
    }
    if (todo === "3" && box === BoxType.Big.toString()) {
      bigBox.coll.length = 0;
      console.log("the big box is now empty");
    }
    restart();
    return question1();
  } catch (err) {
    console.error("Question rejected", err);
  }
}
async function question3() {
  try {
    while (what !== "1" && what !== "2") {
      what = await question(
        "What item do you want to add? (1) Paper, (2) Pencil\n"
      );
    }

    if (what === "1" && box === BoxType.Small.toString()) {
      obj = "paper";
      return question4();
    }
    if (what === "2" && box === "1") {
      obj = "pencil";
      return question4();
    }
    return;
  } catch (err) {
    console.error("Question rejected", err);
  }
}

async function question3b() {
  try {
    while (what !== "1" && what !== "2") {
      what = await question(
        "What item do you want to add? (1) TV, (2) Speaker\n"
      );
    }
    if (what === "1" && box === BoxType.Big.toString()) {
      obj = "TV";
      return question4b();
    }
    if (what === "2" && box === BoxType.Big.toString()) {
      obj = "Speaker";
      return question4b();
    }
  } catch (err) {
    console.error("Question rejected", err);
  }
}

async function question4() {
  try {
    if (obj === "paper") {
      while (
        size !== Size.A4 &&
        size !== Size.A5 &&
        size !== Size.A6 &&
        size !== Size.A7
      ) {
        size = await question(
          "What is the size? (choose between A4, A5, A6, A7)\n"
        );
      }
    }

    return question5();
  } catch (err) {
    console.error("Question rejected", err);
  }
}

async function question4b() {
  try {
    if (obj === "TV") {
      while (typeTv !== Tv.LCD && typeTv !== Tv.OLED) {
        typeTv = await question(
          "What is the type? (choose between LCD and OLED)\n"
        );
      }
    }
    if (obj === "Speaker") {
      capacity = await question("What is the capacity?\n");
    }
    return question5();
  } catch (err) {
    console.error("Question rejected", err);
  }
}

async function question5() {
  try {
    while (isNaN(weight) || weight <= 0) {
      weight = (await question("What is the weight?\n")) as number;
    }
    if (box === BoxType.Small.toString() && obj === "paper") {
      smallBox.addItem!(new Paper(obj, size as string, Number(weight)));
      smallBox.getBox!(smallBox.coll as []);
    } else if (box === "1" && obj === "pencil") {
      smallBox.addItem!(new Pencil(obj, Number(weight)));
      smallBox.getBox!(smallBox.coll as []);
    } else if (box === "2") {
      if (obj === "TV") {
        bigBox.addItem!(new Tele(obj, typeTv as string, Number(weight)));
      } else if (obj === "Speaker") {
        bigBox.addItem!(new Speak(obj, capacity as string, Number(weight)));
      }
      bigBox.getBox!(bigBox.coll as []);
    }
    restart();
    return question1();
  } catch (err) {
    console.error("Question rejected", err);
  }
}
question1();
