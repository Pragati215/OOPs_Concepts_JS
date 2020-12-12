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

    stock() {

        data.company[data.company.length] = [];
    }

    addShare(shareName, numberOfShare, sharePrice) {
        let stock = {

            "shareName": shareName,
            "numberOfShares": numberOfShare,
            "sharePrice": sharePrice

        }
        data.company[data.company.length] = stock

    }

    display() {
        return data;
    }

    calculation() {

        let totalShare = 0;
        
        data.company.forEach(element => {
            totalShare = totalShare + parseInt(element.sharePrice) * parseInt(element.numberOfShares)
        });

        data.company.forEach(element => {
            console.log(element.shareName + ' shares is rs  ' + element.sharePrice * element.numberOfShares);
        });

        return 'total stocks shares is  ' + totalShare + "rs";

    }
    save() {
        fs.writeFileSync('./StockManagement.JSON', JSON.stringify(data, null, 2));
    }

}
module.exports = new StockManagement;