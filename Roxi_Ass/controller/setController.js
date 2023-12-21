var axios = require('axios');
const PRODUCT = require('../model/Product');

module.exports = async (app)=> {
    app.get('/api/Roxi/setController', async (req, res) => {
        axios('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
        .then( async(response)=>{
             PRODUCT.create(response.data);
          })
          .then(async ()=>{
            const LIST = await PRODUCT.find({});
            res.send(LIST);
         })
    });
}