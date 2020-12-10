const fs = require("fs");
let readlineSync = require('readline-Sync');
const stockManagementData = fs.readFileSync('./StockManagement.JSON');
let data = JSON.parse(stockManagementData);
const StockManagement = require('./StockManagementBusinesslogic');

console.log(StockManagement.tcs());
console.log(StockManagement.infosys());
console.log(StockManagement.vipro());