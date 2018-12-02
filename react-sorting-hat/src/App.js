import React, { Component } from 'react';
import Loading from './components/Loading/Loading';
import Speech from './components/Speech/Speech';
import Sorting from './components/Sorting/Sorting';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      sorting: true,
    };
  }
  render() {
    return (
      this.state.loading ? <Loading /> :
      this.state.sorting ? <Sorting /> :
      <div>
        <div className='logo'></div>
        <Speech />
        <div className='signature'></div>
      </div>
    );
  }
}

export default App;
