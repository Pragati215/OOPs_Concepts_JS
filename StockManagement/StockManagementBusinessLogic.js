/*******************************************************************************
 * @problem : Program to read stock names ,number of share & share price 
 *            and print stock result
 * @fileName : StockManagementBusinessLogic.js
 * @Auther  : Pragati Dhakane 
 *******************************************************************************/

 const fs = require("fs");
const stockManagementData = fs.readFileSync('./StockManagement.JSON');
let data = JSON.parse(stockManagementData);

//class defined to calculate shares of each company & class exported to Main logic
class StockManagement {

    constructor(shareName, numberOfShare, sharePrice) {
        this.shareName = shareName;
        this.numberOfShare = numberOfShare;
        this.sharePrice = sharePrice;
    }

    tcs() {
        let tcsTotal = 0;
        data.TCS.forEach(element => {
            tcsTotal = element.numberOfShare * element.sharePrice
        });
        return " TCS Total shares :" + tcsTotal;
    }

    infosys() {
        let infosysTotal = 0;
        data.Infosys.forEach(element => {
            infosysTotal = element.numberOfShare * element.sharePrice
        });
        return " Infosys Total shares :" + infosysTotal;
    }

    vipro() {
        let viproTotal = 0;
        data.Vipro.forEach(element => {
            viproTotal = element.numberOfShare * element.sharePrice
        });
        return " Vipro Total shares :" + viproTotal;
    }
}
module.exports = new StockManagement;