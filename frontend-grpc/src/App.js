import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Emty} from './proto/pets_pb';
import {PetServiceClient} from './proto/pets_grpc_web_pb';
import {InputNumber} from './proto/calcular_pb';
import {CalularClient} from './proto/calcular_grpc_web_pb';

function App() {
  useEffect(()=> {
    (async () => {
      var client = new PetServiceClient('http://localhost:8080');
      var req = new Emty();
      const metadata = {'custom-header-1':'value1'}
      await client.list(req,metadata,(error, pets) => {
        console.log(pets.array[0])
    })
      var client2 = new CalularClient('http://localhost:8080');
      var req2 = new InputNumber();
      req2.setValue(3)
      await client2.square(req2,metadata,(error,result)=>{
        console.log(result.getValue())
      })
      await client2.plus(req2,metadata,(error,result)=>{
        console.log(result.getValue())
      })
    })();
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
