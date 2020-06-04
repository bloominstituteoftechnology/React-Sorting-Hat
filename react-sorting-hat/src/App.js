import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Questions from './components/Questions'
import Gryffindor from './components/Gryffindor'
import Hufflepuff from './components/Hufflepuff'
import Ravenclaw from './components/Ravenclaw'
import Slytherin from './components/Slytherin'

import './App.css';

const initialFormValues={
  //Radio buttons: 
  animals: '',
  traits:'',
  colors:'',
  ghoasts:'',
  moreTraits:'',
  elements: ''
}



function App() {

const [formValues, setFormValues] = useState(initialFormValues)

// Helpers``````````
const onInputChange  = e => {
  const { name } = e.target
  const { value } = e.target

  setFormValues({...formValues, [name]: value})
}

// const onSubmit = e => {
//   e.preventDefault()

//   const newAnswer = {
//     animals: formValues.animals,
//     traits:formValues.traits,
//     colors:formValues.colors,
//     ghoasts:formValues.ghoasts,
//     moreTraits:formValues.moreTraits,
//     elements:formValues.elements
//   }
// }
 


  return (
    <div className="App">
    <h1>Hello Fresh Blood!</h1>
   <Link to='/questions'><button >initiate sorting process</button></Link> 
    {/* Routes:  */}
<Switch>
<Route path='/questions'>
<Questions values={formValues} onInputChange={onInputChange} />
</Route>

<Route path='/gryffindor'>
 <Gryffindor />
</Route>

<Route path='/hufflepuff'>
 <Hufflepuff />
</Route>

<Route path='/ravenclaw'>
 <Ravenclaw />
</Route>

<Route path='/slytherin'>
 <Slytherin />
</Route>

</Switch>

    </div>
  );
}

export default App;
