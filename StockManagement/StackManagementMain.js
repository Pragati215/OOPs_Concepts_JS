const fs = require("fs");
const stockManagementData = fs.readFileSync('./StockManagement.JSON');
let data = JSON.parse(stockManagementData);
const StockManagement = require('./StockManagementBusinesslogic');
console.log(data);
