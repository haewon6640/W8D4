const readline = require("readline");
reader = readline.createInterface({    
    input: process.stdin,
    output: process.stdout
  });

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} > ${el2}?`,(res)=> {
        if (res === "yes") {
            callback(true)
        } else {
            callback(false)
        }
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length-1) {
        askIfGreaterThan(arr[i],arr[i+1],function(isGreaterThan) {
            if (isGreaterThan) {
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr,i+1,madeAnySwaps,outerBubbleSortLoop)
        })
    } else if (i == (arr.length-1)) {
        outerBubbleSortLoop(madeAnySwaps);
    }
}
function absurdBubbleSort(arr,sortCompletionCallback) {
    outerBubbleSortLoop(true);
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr);
        }
    }
}
absurdBubbleSort([2,5,3,4,7,1,5],(arr)=>console.log(arr));