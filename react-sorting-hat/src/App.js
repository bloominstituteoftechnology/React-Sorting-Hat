import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Questions from './components/Questions'
import Gryffindor from './components/Gryffindor'
import Hufflepuff from './components/Hufflepuff'
import Ravenclaw from './components/Ravenclaw'
import Slytherin from './components/Slytherin'
import * as yup from 'yup'

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

const initialDisabled = true


function App() {

// States````````````
const [formValues, setFormValues] = useState(initialFormValues)
const [disabled, setDisabled] = useState(initialDisabled)

// Helpers``````````
const formSchema = yup.object().shape({
  animals: yup.string().required('You must select your animal'),
  traits: yup.string().required('You must select your trait'),
  colors: yup.string().required('You must select your color'),
  ghoasts: yup.string().required('You must select your ghoast'),
  moreTraits: yup.string().required('You must select your moreTrait'),
  elements: yup.string().required('You must select your element')
})


const onInputChange  = e => {

  const { name } = e.target
  const { value } = e.target

  yup
    .reach(formSchema, name)
    // we can then run validate using the value
    .validate(value)

  setFormValues({ ...formValues, [name]: value })
}


useEffect(() => {
  formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formValues])


  return (
    <div className="App">
    <h1>Hello Fresh Blood!</h1>
   <Link to='/questions'><button >initiate sorting process</button></Link> 
   
    {/* Routes: `````````````` */}
<Switch>
<Route path='/questions'>
<Questions values={formValues} onInputChange={onInputChange}  disabled={disabled}/>
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
