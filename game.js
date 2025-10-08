class NinetynineGame {
    constructor(target = 99, base = 10) {
        this.base = base;
        this.overflow = Math.pow(base, Math.floor(Math.log(target) / Math.log(base)) + 1);
        this.currentMove = 1;
        this.targetNum = target;
        this.currentNum = this.randint(0, target - 1);
        this.buttonNums = [
            this.randint(1, this.overflow / 2),
            this.randint(1, this.overflow / 2),
            this.randint(1, this.overflow / 2),
            this.randint(this.overflow / 2 + 1, this.overflow - 1),
            this.randint(this.overflow / 2 + 1, this.overflow - 1)
        ];
    }

    buttonPress(buttonNum) {
        this.currentNum = (this.currentNum + this.buttonNums[buttonNum - 1]) % this.overflow;
        this.currentMove++;
    }

    randint(min = 1, max = 100) {
        min = Math.ceil(min);
        max = Math.floor(max);
        if (min > max) [min, max] = [max, min];
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
