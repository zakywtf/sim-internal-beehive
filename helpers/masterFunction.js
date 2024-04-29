const { IoTSiteWise } = require("aws-sdk");
const Items = require("../schemas/items");
const ReqItem = require("../schemas/req_items");

const inboundOutbound = async(items) => {
    // array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    items.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                console.log(current + ' comes --> ' + cnt + ' times<br>');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
    }

    return current
}

const updateStatusRequestItem = async (req_id, status) => {
    const resp = await ReqItem.findOne({ _id: req_id })
    resp.status = status
    await resp.save()
}

const updateStockItems = async (item_id, amount, status) => {
    if (status == 'inbound') {
        const resp = await Items.findOne({ _id: item_id })
        resp.amount = (resp.amount + amount)
        await resp.save()
    } else if (status == 'outbound') {
        const resp = await Items.findOne({ _id: item_id })
        resp.amount = (resp.amount - amount)
        await resp.save()
    }
}


module.exports = {
    inboundOutbound,
    updateStatusRequestItem,
    updateStockItems
}