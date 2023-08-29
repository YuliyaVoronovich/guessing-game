class GuessingGame {

    average = 0;

    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.average = Math.ceil(this.min/2 + this.max/2);
        return this.average;
    }

    lower() {
        this.max = this.average;
    }

    greater() {
        this.min = this.average;
    }
}

module.exports = GuessingGame;
