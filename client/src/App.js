import React from "react";
import "./App.css";
import List from "./composanat/List";
import Modaladd from "./composanat/Modaladd";
import { Modal } from "react-bootstrap";
import {Link,Route,Redirect, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/List">
          <button>CONTACT LIST</button>
        </Link>
        <Modaladd />
        <Route exact path="/List" component={List} />
      </div>
    </BrowserRouter>
  );
}

export default App;
