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
      speechIndex: 0,
      sortIndex: 0,
      sorting: false,
    };
  }
  handleSpeechChange = (bool) => {
    this.setState((prevState) => {
      if (bool){
        return {
          speechIndex: prevState.speechIndex + 1,
        }
      } else {
        return {
          speechIndex: prevState.speechIndex === 0 ? 0 : prevState.speechIndex - 1,
        }
      }
    }, () => this.state.speechIndex > 9 ? this.setState({sorting: true}) : null);
  }
  handleSkipSpeech = () => {
    console.log('test');
    this.setState({ sorting: true });
  }
  render() {
    return (
      this.state.loading ? <Loading /> :
      this.state.sorting ? <Sorting /> :
      <div>
        <div className='logo'></div>
        <Speech index={this.state.speechIndex} handleChange={this.handleSpeechChange} handleSkip={this.handleSkipSpeech}/>
        <div className='signature'></div>
      </div>
    );
  }
}

export default App;
