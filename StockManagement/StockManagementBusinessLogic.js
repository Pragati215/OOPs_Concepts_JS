class StockManagement {
    constructure(...params) {
        this.shareName = params[0];
        this.numberOfShare = params[1];
        this.sharePrice = params[2];
    }
    totalShare() {
        let totalShare = this.numberOfShare * this.sharePrice;
        console.log("Total share price for " + this.shareName + " is " +totalShare);
        return totalShare;
    }
}
module.exports = StockManagement;