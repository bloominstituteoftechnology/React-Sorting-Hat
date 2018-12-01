import React from 'react';
import './Speech.css';

class Speech extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      speech: [<p>You may come to me from elsewhere - Great Hall or through the DOM,<br/>
        But either way you’d better lend a listen to my song...</p>,
  
        <p>From golden yore and many score my brim has donned a head,<br />
        Be quick, but queued - do not intrude - I’ve but a single thread!</p>,
  
        <p>We’re here to figure out your house, though none are deemed taboo.<br />
        The Founded Four have not the score of Ang, React, or Vue...</p>,
  
        <p>Instead in tandem do we work, together though apart.<br />
        Still every founder had their ways - diverging from the start.</p>,
  
        <p>Good Godric earned his fair renown, known for his daring ways,<br />
        In Gryffindor there waits in store challenges for the brave.</p>,
          
        <p>With Rowena, the rational, this old hat gained its brain,<br />
        In Ravenclaw, the only law: knowledge must always reign.</p>,
  
        <p>Humble Helga took in those willing but yet unsure,<br />
        Steadfast and loyal, through fair and toil, these keep Hufflepuffs pure.</p>,
  
        <p>And pure indeed, Salazar’s need, for his was based in blood,<br />
        In Slytherin, through ambition, dreams can begin to bud.</p>,
  
        <p>So try me on, say try me out, and you’ll find where you stand,<br />
        Don’t be shy, under my eye, you’ll find where you’ll do grand...</p>,
  
        <p>And if indeed, you find the need to doubt how well you mesh,<br />
        Just start again, right from your den!  Restore!  Reload!  Refresh!</p>
      ],
    }
  }
  handleChange = (bool) => {
    this.setState((prevState) => {
      if (bool){
        return {
          index: prevState.index === prevState.speech.length - 1 ? 0 : prevState.index + 1,
        }
      } else {
        return {
          index: prevState.index === 0 ? 0 : prevState.index - 1,
        }
      }
    })
  }
  render(){
    return (
      <div className="speech">
        {this.state.index === 0 ? null :
        <button className="speech-prev" onClick={() => this.handleChange(false)}>PREV</button> }
        {this.state.speech[this.state.index]}
        {this.state.index === this.state.speech.length - 1 ? null :
        <button className="speech-next" onClick={() => this.handleChange(true)}>NEXT</button> }
      </div>
    );
  }
}

export default Speech;