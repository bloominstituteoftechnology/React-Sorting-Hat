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
        <div  className="grid">
            <Grid id ="welcome">
                <Grid.Column  >
                    <p>{data.intro}</p>
                        <br></br>
                    <p>"{data.qualities}"</p>
                    <p>—Albus Dumbledore</p>
                </Grid.Column>
            </Grid>
            <Grid>
                <Grid.Column id ="welcomeimg" >
                    <Image src ={Hogwarts}  alt = 'Hogwarts school' />
                </Grid.Column>
                </Grid>
            <h2>House systems</h2>
            <Grid>
                <Grid.Column>
                <p>{data.houseSistems}</p>
                </Grid.Column>
            </Grid>
            <br></br>
        <Button id="testbtn" basic color='black' onClick={startTest}>Start the test</Button>
        </div>
    </div>
)
}
export default Home;