const client = require('./client')

function get_all_pets(){
    return new Promise((resolve,reject)=>{
        client.list({}, (error, pets) => {
            if (!error) {
                console.log('successfully fetch List pets')
                resolve(pets)
            } else {
                reject(error)
            }
        })
    })
}

module.exports = {get_all_pets}
