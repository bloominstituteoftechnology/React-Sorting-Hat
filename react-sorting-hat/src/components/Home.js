import React from 'react';
import { useHistory} from 'react-router-dom';
import { Grid, Image, Button } from 'semantic-ui-react'
import data from './data.json';
const Hogwarts =require('../img/howgarts.jpeg')

const Home = () =>{
    const history = useHistory()
    
    const startTest = e =>{
        history.push('/questions')
    }
    console.log(data.gryffindor)
return(
    <div className="home">
        <h1>Welcome to Hogwarts!</h1>
        
        <Grid>
            <Grid.Column width={6}>
            <Image src ={Hogwarts}  alt = 'Hogarts house one' />
            </Grid.Column>
            <Grid.Column width={10}>
            <p>{data.intro}</p>
            <br></br>
            <p>"{data.qualities}"</p>
            <p>—Albus Dumbledore</p>
            </Grid.Column>
       </Grid>
        <h2>House systems</h2>
        <Grid>
            <Grid.Column width={16}>
            <p>{data.houseSistems}</p>
            </Grid.Column>
       </Grid>
        <Button basic color='black' onClick={startTest}>Start the test</Button>
    </div>
)
}
export default Home;