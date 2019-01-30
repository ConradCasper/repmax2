const User = require('../models/User')

const conrad = new User ({
    name: "Conrad",
    age: 27,
    weight: 185
})



const cameron = new User ({
    name: "cameron",
    age: 26,
    weight: 350
})


User.deleteMany({})
.then(()=>{
    User.create([conrad, cameron])
}).then(() =>{
    console.log("Seeded Successfully")
})

