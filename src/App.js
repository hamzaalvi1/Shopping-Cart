import React from 'react';
import './App.css';
import RoutesConfig from './Components/RoutesConfig/RoutesConfig';
import {ShoeProvider} from "./Components/Context/GlobalState"
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
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
