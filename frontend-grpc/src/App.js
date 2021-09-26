import logo from './logo.svg';
import './App.css';
import {PetList} from './proto/pets_pb';
import {PetServiceClient} from './proto/pets_grpc_web_pb';
import React,{useEffect} from 'react';
function App() {
  useEffect(()=> {
    (async () => {
      var client = new PetServiceClient('http://localhost:8000');
      var req = new PetList();
      const res = await client.PetList(req,{}).catch(console.error);
      if(!res){
        res.toObject();
      }
      console.log(res)
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
