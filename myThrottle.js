Function.prototype.myThrottle=function(interval) {
    let tooSoon = false;
    let that = this;
    return () => {
        if (tooSoon) {

        } else {
            tooSoon = true;
            setTimeout(function() {
                tooSoon = false;
                that();
            },interval)
        } 
    }
}

// class Neuron {
//     constructor() {
//         this.fire = this.fire.myThrottle(500);
//     }
//     fire() {
//         console.log("Firing!");
//     }
// }
// const neuron = new Neuron();

// const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);

