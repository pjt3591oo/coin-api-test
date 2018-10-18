let coins = require('./price.json')

class CoinParser {

    constructor () {
        this.hasCoin = ["BTC", "EOS", "ETH", "BCH", "XRP"]
    }

    isHaveCoin(coinName){
        return this.hasCoin.includes(coinName)
    }

    get(coinName) {
        let res = {}
        let NEXT_STRING = "_KRW"

        if ( this.isHaveCoin(coinName) ) {
            coinName += NEXT_STRING
            res = coins[coinName]
        } else {
            this.hasCoin.map(item => {
                coinName = item + NEXT_STRING
                res[coinName] = coins[coinName]
            })
        }

        return res
    }
}

// let c = new CoinParser()

// let a = c.get("BCH")
// let b = c.get("BC1H")

// console.log(" ==============")
// console.log(a)
// console.log(" **************")
// console.log(b)
// console.log(" --------------")

module.exports = CoinParser;