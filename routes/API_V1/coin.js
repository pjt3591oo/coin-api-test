var express = require('express');
var router = express.Router();

let coins = require('../../models')

const coin = new coins()

router.get('/', (req, res, next) => {
    /*
      * BTC | EOS | EOS | BCH | XRP
     */
    let { currency } = req.params
    
    try {
        let data = coin.get(currency.toUpperCase())
    } catch (err) {
        return next(err)
    }

    return res.status(200).json({status: "success", data: data})
})

router.get('/:currency', (req, res, next) => {
    /*
      * BTC | EOS | EOS | BCH | XRP
     */
    let { currency } = req.params
    
    try {
        let data = coin.get(currency.toUpperCase())
    } catch (err) {
        return next(err)
    }

    return res.status(200).json({status: "success", data: data})
})

module.exports = router;