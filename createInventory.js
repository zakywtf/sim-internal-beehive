
let dotenv = require('dotenv')
dotenv.config()

const bcrypt = require("bcryptjs");

let mongoose =  require('mongoose');
let model = require('./schemas/users')

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

const createAdmin = async () => {
    let passwordHash = await bcrypt.hash('12345678' + process.env.SALT, 10);

    let admin = new model({
        password: passwordHash,
        email: 'inventory@beehivedrones.com',
        name: 'Inventory Beehive',
        role: 'inventory',
        phone: '08324378979',
        employee_id: '20200101010'
    });

    await admin.save()
}

createAdmin()

model.find({},(err,resp)=>{
    console.log(resp, err, 'findone');
})


 