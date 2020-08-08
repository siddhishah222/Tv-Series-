import React from 'react';
import './App.css';
//import HellowMessage from './components/HelloMessage';
//import Main from './containers/Main/Main';
//import Form from './form/form';
//import Greeting from './Tvseries/greeting';
import Time from './Tvseries/time';
//import Series from './Tvseries/series';
import Main from './Tvseries/Main';

const App=()=>{
// function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"> TV SERIES LIST</h1>
      </header>
        {/* <HellowMessage name="Siddhi"/> */}
        {/* call name prop from fun comp to class based using this.props.name */}
        {/* <Netflix/> */}
        {/* <Main/> */}
        {/* <Form/>
        <Series/> */}
        <Main/>
        <Time/>
        
        {/* <Greeting message="Explore all your favourite TV series here"/> */}
    </div>
  );
}

export default App;


//HellowMessage is the main file which will render so is called in App.js

