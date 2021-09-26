Prerequisites

Before you continue, ensure you meet the following requirements:

* You have installed the latest nodejs.
* Installed docker lastest version.
* You have a basic understanding of file proto.

## First, git clone all my file in github.

` git clone https://github.com/typro33333/reactjs-grpc-nodejs `

` .then `

` cd reactjs-grpc-nodejs `
## Deploy Envoy Server
#### The brower will understand http1 request to http2 so we need Enovy.
You can read it here: <a>https://www.envoyproxy.io/</a>
#### We will use docker to deploy envoy proxy and redis. In folder have docker-compose.yml and envoy.yml (config envoy).
* Run docker-compose by command:
` docker-compose up `

* You can stop it with:
`docker-compose down or ctrl+c`

## Apply grpc for nodejs and reactjs request by grpc.
#### Because reactjs can't handling grpc, so we need generate all fille proto -> file JS.

#### Use this command to generate:
* Pets proto:
` protoc -I. ./proto/pets.proto --js_out=import_style=commonjs,binary:./frontend-grpc/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend-grpc/src`
##
* Cal proto:
`protoc -I. ./proto/calcular.proto --js_out=import_style=commonjs,binary:./frontend-grpc/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend-grpc/src `

#### They will gen in folder fontend-grpc/src/proto

## Run Server
#### 1. Install package require in package.json
` npm install `
#### 2. I have divided forder server and client.
* You can run server with command: ` npm start ` .The server auto restart when have a little change (package: nodemon).

## Run Reactjs
#### Notice: Open second terminal.
* Move folder react-js:
` cd frontend-grpc `
* Install package need:
` npm install `
#### Wait the package is download. If complete run next command:
` npm start `
#### They will send u to your brower default. (Should chorme or microsoft edge to test request)
#### Press `F12` and click to console to join it.
## GOOD LUCK FOR HACKING
