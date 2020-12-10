class Grains {
    constructor(name,weight,price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    
    }

    calculation() {
        let total = this.weight * this.price;
        console.log("Total price for " + this.name + " is " +total);
        return total;
    }
    
}
module.exports = Grains;