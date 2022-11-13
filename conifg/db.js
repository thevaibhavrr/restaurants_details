const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/details`,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then((con)=>{
    console.log('connnect db')
}).catch((e)=>{
    console.log(e,'unable to connect')
})
module.exports = mongoose