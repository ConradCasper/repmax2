const User = require('../models/User')

const userController = {
    index: (req,res) => {
        User.find({}).then((user)=>{
            res.send(user)
        })
    },
    show: (req,res) => {
        User.findById(req.params.userId).then((user) => {
            res.send(user)
        })
    }

}

module.exports = userController