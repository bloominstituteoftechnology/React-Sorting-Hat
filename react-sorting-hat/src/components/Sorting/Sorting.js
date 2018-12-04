import React from 'react';
import './Sorting.css';

class Sorting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      gryffindor: 0,
      ravenclaw: 0,
      hufflepuff: 0,
      slytherin: 0,
    };
  }
  submit = () => {
    if(!this.state.input){
      alert('Please answer the question');
      return;
    }
      const proxyUrl = 'https://cors-escape.herokuapp.com/';
      const targetUrl = 'https://api.aylien.com/api/v1/sentiment';
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${proxyUrl}${targetUrl}?text=${this.state.input}`, true);
      xhr.setRequestHeader('X-AYLIEN-TextAPI-Application-Key', '7f38f29ca46bcbf3036220c3553abba1');
      xhr.setRequestHeader('X-AYLIEN-TextAPI-Application-ID', '67147080');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){ // If readyState == DONE
          if (xhr.status === 200){ // If successful
            console.log('SUCCESS!');
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            this.handleTally(response);
          } else { // If failed
            console.log('FAILED', xhr.status);
          }
        } else { // If state changed but is not yet done
          console.log('xhr processing');
        }
      }
      console.log('request sent successfully'); // Informs you request was sent
      this.setState({
        input: '',
      });
  }
  handleChange = e => {
    this.setState({
      input: e.target.value,
    })
  }
  handleTally = (response) => { // Completely arbitrary way of determining house
    if (response.polarity === 'positive'){
      this.setState((prevState) => ({ gryffindor: prevState.gryffindor + 1 }));
    }
    else if (response.polarity === 'negative'){
      this.setState((prevState) => ({ slytherin: prevState.slytherin + 1 }));
    } else {
      if (response.subjectivity === 'objective'){
        this.setState((prevState) => ({ ravenclaw: prevState.ravenclaw + 1 }));
      } 
      else if (response.subjectivity === 'subjective'){
        this.setState((prevState) => ({ hufflepuff: prevState.hufflepuff + 1 }));
      } else {
        const random = Math.floor(Math.random() * 4);
        if (!random){
          this.setState((prevState) => ({ gryffindor: prevState.gryffindor + 1 }));
        }
        else if (random === 1){
          this.setState((prevState) => ({ ravenclaw: prevState.ravenclaw + 1 }));
        }
        else if (random === 2){
          this.setState((prevState) => ({ hufflepuff: prevState.hufflepuff + 1 }));
        } else {
          this.setState((prevState) => ({ slytherin: prevState.slytherin + 1 }));
        }
      }
    }
  }
  render(){
     return (
       <div>
         <input type="text" 
          placeholder="Write answer here" 
          value={this.state.input} 
          onChange={this.handleChange}
        />
         <button type="button" onClick={this.submit}>Submit</button>
         <button type="button" onClick={() => console.log(this.state)}>STATE</button>
       </div>
     );
  }
}

export default Sorting;