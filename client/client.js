const grpc = require('grpc');
const PROTO_PATH = './proto/pets.proto';
const PetService = grpc.load(PROTO_PATH).PetService;

const client = new PetService('localhost:8888',
    grpc.credentials.createInsecure()
)

module.exports = client;
