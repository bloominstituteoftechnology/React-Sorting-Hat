import React from 'react';
import './Loading.css';

class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      msg: '',
    };
  }
  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          msg: prevState.msg === '...' ? '' : prevState.msg + '.',
        };
      });
    }, 350);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    return(
      <div className='loading'>
        <h2>Loading{this.state.msg}</h2>
      </div>
    );
  }
}

export default Loading;