const fs = require("fs");
let readlineSync = require('readline-Sync');
const stockManagementData = fs.readFileSync('./StockManagement.JSON');
let data = JSON.parse(stockManagementData);
const StockManagement = require('./StockManagementBusinesslogic');

function stockManagement(input) {
      switch (parseInt(input)) {
            case 1:
                  console.log(data.TCS);
                  console.log(StockManagement.tcs());
                  break;
            case 2:
                  console.log(data.Infosys);
                  console.log(StockManagement.infosys());
                  break;
            case 3:
                  console.log(data.Vipro);
                  console.log(StockManagement.vipro());
                  break;
            case 4:
                  console.log("Exit");
                  break;
            default:
                  console.log("Wrong choice");
                  break;
      }
}
for (i = 1; i < 11; i++) {
      let input = readlineSync.question("enter choice : 1.Tcs 2.Infosys 3.Vipro 4.exit:");
      if (input == 4) {
            return;
      }
      console.log(stockManagement(parseInt(input)));
}