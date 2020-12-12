/*******************************************************************************
 * @problem : Menu Driven Program to read stock names ,number of share & share 
 *            price and print stock result
 * @fileName : StockManagementMain.js
 * @Auther  : Pragati Dhakane 
 *******************************************************************************/
const fs = require("fs");
let readlineSync = require('readline-Sync');
const stockManagementData = fs.readFileSync('./StockManagement.JSON');
let data = JSON.parse(stockManagementData);
const StockManagement = require('./StockManagementBusinesslogic');

// methods & case statement used to make menu driven program  
function accountManagement() {

      for (i = 1; i < 10; i++) {
            let input = readlineSync.question("enter choice : 1.Add Share 2.Print Report 3.Total Share 4.Exit:");
            if (input == 4) return;

            switch (parseInt(input)) {
                  case 1:
                        let Company = readlineSync.question("enter name of company: ");
                        let numOfShares = readlineSync.question("enter number of shares: ");
                        let price = readlineSync.question("enter price: ");
                        StockManagement.addShare(Company, numOfShares, price);
                        StockManagement.save();
                        break;
                  case 2:
                        console.log(StockManagement.display());
                        break;
                  case 3:
                        console.log(StockManagement.calculation());
                        break;
                  case 4:
                        console.log("Exit");
                        break;
                  default:
                        console.log("Wrong choice");
                        break;
            }
      }
}
accountManagement();

