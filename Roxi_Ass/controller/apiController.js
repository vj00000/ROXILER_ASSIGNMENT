const PRODUCT = require('../model/Product');
var axios = require('axios');
module.exports = async (app)=> {
    var I=0;
    var MONTH = ['January','February','March','April','May','June','July',
                'August','September','October','November','December'];

    app.post('/api/transaction/',async(req,res)=>{
        // int getI = value
        console.log(req.body);
        var getI = 0; //find and store getI, next increment getI, prev decrement getI
        I = I + getI*10;
        if(I<0){I = 0};
    })    

    // GET TRANSACTION OF PARTICULAR MONTH
    app.get('/api/transaction/statistics/:month', async(req,res)=>{
        var month = req.params.month;
        console.log(month);
        PRODUCT.find({})
        .then((RES)=>{
            var filterMonth =  RES.filter((item)=>{
                if(MONTH[item.dateOfSale.getMonth()] == month)return true;
                return false;
            });
            var totalSale=0;
            var soldSale=0;
            var notSoldSale=0;
            for(let i=0;i<filterMonth.length;i++)
            {
                totalSale += filterMonth[i].price;
                if(filterMonth[i].sold === true)soldSale+= filterMonth[i].price;
                else notSoldSale += filterMonth[i].price;
            }
            console.log(totalSale);
            console.log(soldSale);
            console.log(notSoldSale);
            var obj = {
                totalSale : totalSale,
                soldSale : soldSale,
                notSoldSale : notSoldSale
            }
            res.send(obj);
        })
    })


    // RETURN ALL TRASANCTIONS
    app.get('/api/transaction/', async (req, res) => {
        PRODUCT.find({}).skip(I).limit(10)
        .then((RES)=>{
            let data = {  
                Products: RES 
            } 
            res.render('index', { data: data });
        })
    });
    
    app.get('/api/transaction/final',async(req,res)=>{
        const getAllTransaction = axios('/api/transaction/');
        var statistics = axios('/api/transaction/statistics/March');
        res.send(getAllTransaction + 1);
    })
}