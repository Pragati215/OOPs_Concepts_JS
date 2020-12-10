/*******************************************************************************************************
 * @problem : Json objects of rice, pulses and wheat,  calculate total from price and weight
 * @fileName : InventoryManagementBusinessLogic.js
 * @Auther  : Pragati Dhakane
 *******************************************************************************/

 //class is defined & exported to Main logic
class Grains {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;

    }
    //method created to calculate total price of grains
    calculation() {
        let total = this.weight * this.price;
        console.log("Total price for " + this.name + " is " + total);
        return total;
    }

}
module.exports = Grains;