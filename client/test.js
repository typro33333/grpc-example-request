const {get_all_pets} = require('./get_pets');

console.log(get_all_pets().then(result => {
    console.log(result)
}).catch((err) => {
    
}));