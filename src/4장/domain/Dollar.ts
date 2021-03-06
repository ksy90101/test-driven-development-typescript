export class Franc {

    private readonly amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    public times(multiplier: number) {
        const multiplyDollar = this.amount * multiplier;
        return new Franc(multiplyDollar);
    }

    public equals(object: Franc) {
        return this.amount === object.amount;
    }
}