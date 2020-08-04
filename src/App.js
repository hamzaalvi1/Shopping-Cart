import React from 'react';
import './App.css';
import RoutesConfig from './Components/RoutesConfig/RoutesConfig';
import {ShoeProvider} from "./Components/Context/GlobalState"
function App() {
  return (
    <ShoeProvider>
    <div className="App">
      <RoutesConfig/>
    </div>
    </ShoeProvider>
  );
}

export default App;
