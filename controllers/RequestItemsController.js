const apiResponse = require("../helpers/apiResponse");
const mailer = require("../helpers/nodeMailer");
const Schema = require("../schemas/req_items");
const Items = require("../schemas/items");

const { generate } = require("../helpers/randGen")

const ReqItemsController = {

    index: async (req, res) => {
        var items = await Items.find({}).sort({ created_at: 1 })
        var datas = await Schema.find({}).sort({ created_at: -1 })
        console.log()
        res.render('request-items/index', { items, datas });
    },
    
    create: async (req, res) => {

        res.render('request-items/create');
    },
    
    detail: async (req, res) => {
        var data = await Schema.findOne({ _id: req.query.req_item_id })
        // console.log({data, items: data.items[0]})
        res.render('request-items/detail', { data, items: data.items });
    },

    // ==========================================================================================================================================

    insert: async (req, res, next) => {

        try {
            const items = []
            const arrItems = req.body.items
            const arrQtys = req.body.quantities
            const arrSts = req.body.statuses
            for (let i = 0; i < arrItems.length; i++) {
                const item = arrItems[i];
                const quantity = arrQtys[i];
                const status = arrSts[i];
                const item_id = await Items.findOne({ code: item }).select('_id code name')
                
                const obj = {
                    item_id: item_id._id,
                    amount: parseInt(quantity),
                    status: status
                }

                items.push(obj)
            }
            console.log({ items, body: req.body });
            const req_id = await generate(6)
            
            let obj = new Schema({...req.body, items: items, request_by: req.session.user_id, request_id: req_id});
            await obj.save(async (err, data) => {
                if (err) console.log({err});
                // res.redirect('/web/v1/request-items');
                res.json({ success: 200, data: { data } })

            });

        } catch (error) {
            console.log('error ', error);
        }
    },
}

module.exports = ReqItemsController;