const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/inbounds");
const Items = require("../schemas/items");

const { generate } = require("../helpers/randGen")
const { updateStatusRequestItem, updateStockItems } = require("../helpers/masterFunction")

const InboundsController = {

    index: async (req, res) => {
        var datas = await Schema.find({}).sort({ created_at: 1 })

        res.render('inbounds/index', { datas });
    },
    

    // ==========================================================================================================================================

    insert: async (req, res, next) => {

        try {
            const items = []
            const arrItems = req.body.items
            const arrQtys = req.body.quantities
            for (let i = 0; i < arrItems.length; i++) {
                const item = arrItems[i];
                const quantity = arrQtys[i];
                const item_id = await Items.findOne({ code: item }).select('_id code name')
                
                const obj = {
                    item_id: item_id._id,
                    amount: parseInt(quantity),
                    request_item_id : req.body.req_id
                }

                // items.push(obj)

                console.log({obj});
                await Schema.create(obj)
                await updateStockItems(obj.item_id, obj.amount, 'inbound' )
            }
            await updateStatusRequestItem(req.body.req_id, 'inbound')
            
            // let obj = new Schema({...req.body, items: items, request_by: req.session.user_id, request_id: req_id});
            // await obj.save(async (err, data) => {
            //     if (err) console.log({err});
            //     res.redirect('/web/v1/request-items');
                
            // });
            res.json({ success: 200, data: null })

        } catch (error) {
            console.log('error ', error);
        }
    },
    
}

module.exports = InboundsController;