const fs = require("fs");
const inventoryManagementData = fs.readFileSync('./InventoryManagement.JSON');
let items = JSON.parse(inventoryManagementData);

const Grains = require('./InventoryManagementBusinesslogic');
// let rice = new Grains;
// let wheat = new Grains;
// let pulse = new Grains;

function rice() {
    console.log(items.Rice);
for (let i = 0; i < 3; i++){
    let riceName = items.Rice[i].name;
    let riceWeight = items.Rice[i].weight;
    let ricePrice = items.Rice[i].price;
    let riceTotal = new Grains(riceName, riceWeight, ricePrice);
    riceTotal.calculation();
    }
}
rice();

function wheat() {
    console.log(items.Wheat);
for (let i = 0; i < 3; i++){
    let wheatName = items.Wheat[i].name;
    let wheatWeight = items.Wheat[i].weight;
    let wheatPrice = items.Wheat[i].price;
    let wheatTotal = new Grains(wheatName, wheatWeight, wheatPrice);
    wheatTotal.calculation();
    }
}
wheat();

function pulses() {
    console.log(items.Pulses);
for (let i = 0; i < 3; i++){
    let pulsesName = items.Pulses[i].name;
    let pulsesWeight = items.Pulses[i].weight;
    let pulsesPrice = items.Pulses[i].price;
    let pulsesTotal = new Grains(pulsesName, pulsesWeight, pulsesPrice);
    pulsesTotal.calculation();
    }
}
pulses();



//  rice.forEach(element => {
//      Grains.calculation(element);
//  });

