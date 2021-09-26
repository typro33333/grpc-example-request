var grpc = require('grpc');

/* Path file proto */
var PetsProto = grpc.load('./proto/pets.proto');
var CalcularProto = grpc.load('./proto/calcular.proto');

/* Create server grpc */
var server = new grpc.Server();

var pets = [
    { id: '1', name: 'Alaska', description: 'Description 1' },
    { id: '2', name: 'Husky', description: 'Description 2' },
    { id: '3', name: 'Rock', description: 'Description 3' }
]

server.addService(PetsProto.PetService.service,{
    list: (_, callback) => {
        callback(null,pets)
    }
})

server.addService(CalcularProto.Calular.service,{
    square:(input,callback) => {
        callback(null,input.request.value*input.request.value)
    },
    plus:(input,callback) =>{
        callback(null,input.request.value+input.request.value)
    }
})

server.bind('localhost:8082',grpc.ServerCredentials.createInsecure());
console.log('Server running at http://localhost:8082')
server.start();

/* Run on bash to generate file JS */
/* protoc -I. ./proto/pets.proto --js_out=import_style=commonjs,binary:./frontend-grpc/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend-grpc/src*/
/* protoc -I. ./proto/calcular.proto --js_out=import_style=commonjs,binary:./frontend-grpc/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend-grpc/src */