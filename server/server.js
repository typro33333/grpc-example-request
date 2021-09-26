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

server.bind('localhost:8082',grpc.ServerCredentials.createInsecure());
console.log('Server running at http://localhost:8082')
server.start();

/*protoc -I=./proto/pets.proto --js_out=import_style=commonjs --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR */
/* protoc-gen-grpc --js_out=import_style=commonjs,binary:./proto/gen --grpc_out=grpc_js:./proto/gen --proto_path ./proto ./proto/pets.proto */
/* protoc -I. ./proto/pets.proto --js_out=import_style=commonjs:./proto/gen --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./proto/gen */