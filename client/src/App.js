import React from 'react';
import "./App.scss"
import Auth from "./component/Context/Auth/Auth.js"
import { BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
      <Auth>
      </Auth>
  );
}

export default App;
