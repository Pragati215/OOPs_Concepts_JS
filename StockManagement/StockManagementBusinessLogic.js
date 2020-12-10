const fs = require("fs");
const stockManagementData = fs.readFileSync('./StockManagement.JSON');
let data = JSON.parse(stockManagementData);

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
        return " TCS Total shares is :" + tcsTotal;
    }

    infosys() {
        let infosysTotal = 0;
        data.Infosys.forEach(element => {
            infosysTotal = element.numberOfShare * element.sharePrice
        });
        return " Infosys Total shares is :" + infosysTotal;
    }

    vipro() {
        let viproTotal = 0;
        data.Vipro.forEach(element => {
            viproTotal = element.numberOfShare * element.sharePrice
        });
        return " Vipro Total shares is :" + viproTotal;
    }
}
module.exports = new StockManagement;