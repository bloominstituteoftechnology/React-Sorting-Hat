import React from 'react';
import { useHistory} from 'react-router-dom'
const Home = () =>{
    const history = useHistory()
    
    const startTest = e =>{
        history.push('/questions')
    }
return(
    <div>
        <h1>Welcome to Hogwarts!</h1>
        <h2>The Four Houses of Hogwarts</h2>
            <p>Gryffindor</p>
            <p>Hufflepuff</p>
            <p>Ravenclaw</p>
            <p>Slytherin</p>
        <button onClick={startTest}>Start the test</button>
    </div>
)
}
export default Home;