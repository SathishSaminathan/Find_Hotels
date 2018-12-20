import React, { Component } from 'react';
import FindHome from "./FindHome/FindHome";
import Header from "./FindHome/Header";

import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header/>
      <FindHome/>
      </React.Fragment>
    );
  }
}

export default App;
