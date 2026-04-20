class Game {
    constructor(target = 99, base = 10) {
        this.base = base;
        this.overflow = base ** (Math.floor(Math.log(target) / Math.log(base)) + 1);

        this.isWin = false;
        this.currentMove = 1;

        this.targetNum = target;
        this.currentNum = (() => {
            const n = this._randint(0, this.overflow - 2);
            return n < this.targetNum ? n : n + 1;
        })();
        this.buttonNums = [
            this._randint(1, this.overflow / 2),
            this._randint(1, this.overflow / 2),
            this._randint(1, this.overflow / 2),
            this._randint(this.overflow / 2 + 1, this.overflow - 1),
            this._randint(this.overflow / 2 + 1, this.overflow - 1)
        ];
    }

    buttonPress(buttonNum) {
        if (this.isWin) return;

        if (!Number.isInteger(buttonNum) || buttonNum < 1 || buttonNum > this.buttonNums.length) {
            throw new Error("Invalid button number");
        }

        this.currentNum = (this.currentNum + this.buttonNums[buttonNum - 1]) % this.overflow;
        this._checkIsWin();
        if (!this.isWin) this.currentMove++;
    }

    getButtonHiddenValue(buttonNum) {
        if (!Number.isInteger(buttonNum) || buttonNum < 1 || buttonNum > this.buttonNums.length) {
            throw new Error("Invalid button number");
        }

        const value = this.buttonNums[buttonNum - 1];
        return value <= this.overflow / 2 ? "+" : "-";
    }

    getButtonDisplayValue(buttonNum) {
        if (!Number.isInteger(buttonNum) || buttonNum < 1 || buttonNum > this.buttonNums.length) {
            throw new Error("Invalid button number");
        }

        const value = this.buttonNums[buttonNum - 1];
        return value <= this.overflow / 2 ? `+${value}` : `-${this.overflow - value}`;
    }

    _checkIsWin() {
        this.isWin = this.currentNum === this.targetNum;
    }

    _randint(min = 1, max = 100) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (Math.abs(max - min) + 1)) + min;
    }
}

class NinetynineGame extends Game {
    constructor() {
        super(99, 10);
    }
}
