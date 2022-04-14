class Clock {
    constructor() {
        let current_date = new Date();
        this.hour = current_date.getHours();
        this.min = current_date.getMinutes();
        this.sec = current_date.getSeconds();
    }
    printTime() {
        let strHour = this.hour < 10 ? `0${this.hour}`:`${this.hour}`;
        let strMin = this.min < 10 ? `0${this.min}`:`${this.min}`;
        let strSec = this.sec < 10 ? `0${this.sec}`:`${this.sec}`;
        console.log(`${strHour}:${strMin}:${strSec}`)
    }
    _tick() {
        this.sec++;
        if (this.sec > 59) {
            this.min++;
            this.sec = 0;
        }
        if (this.min > 59) {
            this.hour++;
            this.min = 0;
        }
        if (this.hour > 23) {
            this.hour = 0;
        }
        this.printTime();
    }
}

const clock = new Clock();
for (let i = 0; i < 50; i++) {
    clock._tick();
}
