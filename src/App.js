import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import useSWR from 'swr';

function App() {
  
  // useEffect(()=>{
  //   fetch('http://34.66.137.51:4000/testing',{
  //     method:'GET',
  //     header:{ "Content-Type" : "applicaton/json"}
  //   })
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data);
  //   })
  // },[])
  const {data, error} = useSWR('http://34.66.137.51:4000/testing',fetch('http://34.66.137.51:4000/testing',{
    method:'GET',
    header:{ "Content-Type" : "applicaton/json"}
    })
    .then(response=>response.json())
  );
  useEffect(()=>{
    console.log(data);
  },[data]);
  if(error) return <div> Failed to load </div>
  if(!data) return <div> Loading ...</div> 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{data}</p>
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
