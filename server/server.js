const grpc = require('grpc');
const petsProto = grpc.load('./proto/pets.proto');
const server = new grpc.Server();

const pets = [
    { id: '1', name: 'Alaska', description: 'Description 1' },
    { id: '2', name: 'Husky', description: 'Description 2' },
    { id: '3', name: 'Rock', description: 'Description 3' }
]

server.addService(petsProto.PetService.service,{
    list: (_, callback) => {
        callback(null, pets)
    }
})

server.bind('localhost:8888',grpc.ServerCredentials.createInsecure());
console.log('Server running at http://localhost:8888')
server.start();