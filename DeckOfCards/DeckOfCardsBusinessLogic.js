/*******************************************************************************************************
 * @problem :  write a program using array to distribute cards amongst 4 players
 * @fileName : DeckOfCardsBusinessLogic.js
 * @Auther  : Pragati Dhakane
 *******************************************************************************/

//class is defined & exported to Main Logic 

class DeckOfCards {

    constructor() {
        this.suit = ["Diamonds", "clubs", "Spades", "Hearts"]
        this.rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    }

 /* @description: card() is used to take DeckOfCards and shuffle them to distribute amongst players
 * @purpose: it reads  array data from deck of cards 
 */

    cards() {

        let uniquecard = new Array()
        let shfulledDeck = new Array(4)

        for (let i = 0; i < shfulledDeck.length; i++) {
           
            shfulledDeck[i] = new Array(9)
        }

        //Distribute cards to 4 players
        for (let j = 0; j < 9; j++) {

            for (let k = 0; k < 4; k++) {
               
                let rankindex = (Math.round(Math.random() * 10) % 13)
                let suitindex = (Math.round(Math.random() * 10) % 4)
                let card = this.suit[suitindex] + this.rank[rankindex]
                
                if (uniquecard.includes(card)) {
                    k--;
                } else {
                    uniquecard.push(card)
                    shfulledDeck[k][j] = card
                }
            }
        }
        console.log("cards distributed in 4 players -", shfulledDeck);
    }
}
module.exports = new DeckOfCards;  
