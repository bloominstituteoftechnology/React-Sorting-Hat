import React from 'react';

class Sorting extends React.Component {
  constructor(props){
    super(props);
  }
  submit = () => {
    const languageAnalysis = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.aylien.com/api/v1/sentiment', true);
      xhr.setRequestHeader('X-AYLIEN-TextAPI-Application-Key', '7f38f29ca46bcbf3036220c3553abba1');
      xhr.setRequestHeader('X-AYLIEN-TextAPI-Application-ID', '67147080');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('Access-Control-Allow-Origin', '');
      const params = JSON.stringify({
        'mode': 'document',
        'text': "This is a Harry Potter website that's meant to do a thing."
      });
      xhr.send(params);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){
          if (xhr.status === 200){
            console.log('SUCCESS!');
            const response = xhr.responseText;
            const responseJSON = JSON.parse(response);
            resolve(responseJSON);
          } else {
            reject(xhr.status);
            console.log('FAILED');
          }
        } else {
          console.log('xhr processing');
        }
      }
      console.log('request sent successfully');
    });
    return languageAnalysis;
  }
  render(){
     return <button onClick={this.submit}>SUBMIT</button>
  }
}

export default Sorting;