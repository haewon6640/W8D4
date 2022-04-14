const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

addNumbers = (sum,numsLeft,completionCallback) => {
    if (numsLeft > 0) {
        reader.question("giv a number",(res)=> {
            res = parseInt(res);
            sum += res
            console.log(sum);
            addNumbers(sum,numsLeft-1,completionCallback)
        })
    } else if (numsLeft === 0) {
        completionCallback(sum);
    }
}

// addNumbers(0,3,sum=> console.log(`Total Sum: ${sum}`))

Function.prototype.myBind = function(context){
    let that = this;
    return function() {
       that.apply(context)
    }
}

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function() {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"