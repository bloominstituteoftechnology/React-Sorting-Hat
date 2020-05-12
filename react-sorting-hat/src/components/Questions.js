import React from 'react';
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import data from './data.json';

 const house1 =require('../img/house1.png');
 const house2 =require('../img/house2.png');
 const house3 =require('../img/house3.png');
 const house4 =require('../img/house4.png');
 

Survey
    .StylesManager
    .applyTheme("winterstone")

class Questions extends React.Component {
    constructor(props){
        super(props);
        this.state ={
         
        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    };
    
    onCompleteComponent =(survey) => {
        let resultAsString = survey.data;
        console.log(resultAsString,"something");
        let myArray = Object.values(resultAsString);
        console.log(myArray ,"the array");

            var counts = {};
            var compare = 0;
            var mostFrequent;
            (function(array){
            for(var i = 0, len = array.length; i < len; i++){
                var valueInArray = array[i];
                
                if(counts[valueInArray] === undefined){
                    counts[valueInArray] = 1;
                }else{
                    counts[valueInArray] = counts[valueInArray] + 1;
                }
                    if(counts[valueInArray] > compare){
                            compare = counts[valueInArray];
                            mostFrequent = myArray[i];
                    }
                }
            return mostFrequent;
            })(myArray);

        
        this.setState({
            isComplete: true,
            valuesChoosed:resultAsString,
            resultFiltered: mostFrequent
        })
    };

    render(){
        var json = {
            "title": "Complete the survey to see to which house you belong",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "main_values",
                    "title": "Which group of values represent you the most?",
                    "choices": [
                        { text:  "Bravery, daring, nerve, and chivalry", value:1 },
                        { text:  "Hard work, dedication, patience, loyalty, and fair play", value:2 },
                        { text:  "Intelligence, knowledge, and wit" , value:3 },
                        { text:  "Aambition, cunning and resourcefulness", value:4 },
                    ],
                }, {
                    "type": "radiogroup",
                    "name": "elements",
                    "title": "What element describes you the most?",
                    "choices": [
                        { text: "Air", value:1 },
                        { text: "Earth", value:2 },
                        { text: "Fire", value:3 },
                        { text:"Water", value:4 },
                    ]
                }, {
                    "type": "radiogroup",
                    "name": "colors",
                    "title": "Which combination of the colors is your favotite?",
                    "choices": [
                        { text: "Scarlet and gold", value:1 },
                        { text:"Yellow and Black",  value:2 },
                        { text:"Blue and bronze",  value:3 },
                        { text:"Green and silver", value:4 },
                    ],
                },
                {
                    "type": "radiogroup",
                    "name": "animals",
                    "title": "Which animal represents you the most? ",
                    "choices": [
                        { text: "Lion", value:1 },
                        { text:"Badger",  value:2 },
                        { text:"Eagle",  value:3 },
                        { text:"Snake", value:4 },
                    ],
                },
                {
                    "type": "radiogroup",
                    "name": "ghosts",
                    "title": "With which of the following ghosts you believe you can be friends? ",
                    "choices": [
                        { text: "Nearly Headless Nick", value:1 },
                        { text:"Fat Friar",  value:2 },
                        { text:"Grey Lady",  value:3 },
                        { text:"Bloody Baron", value:4 },
                    ],
                },
                {
                    "type": "radiogroup",
                    "name": "wizard",
                    "title": "Which of the following wizards inspired you the most? ",
                    "choices": [
                        { text: "Godric Gryffindor", value:1 },
                        { text:"Helga Hufflepuff",  value:2 },
                        { text:"Rowena Ravenclaw",  value:3 },
                        { text:"Salazar Slytherin", value:4 },
                    ],
                },
            ]
        };

        // console.log(this.state,"this state")
        return(
            <div>
                {
                    (!this.state.isComplete) ? (
                        <Survey.Survey
                        json={json}
                        showCompletePage={false}
                        onComplete={this.onCompleteComponent}
                        />  
                    ) : null 
                }

                {
                    (this.state.isComplete && this.state.resultFiltered === 1 ) ? (
                        <div className='result gryffindor'>
                            <h2> Congradulations, you belong to Gryffindor house!</h2>
                            <img src ={house1}  alt = 'Hogarts house'/>
                            <p>{data.gryffindor}</p>
                        </div>

                    ) : (this.state.isComplete && this.state.resultFiltered === 2) ? (
                        <div className='result hufflepuf'>
                            <h2>Congradulations, you belong to Hufflepuff house!</h2>
                            <img src ={house2}  alt = 'Hogarts house'/>
                            <p>{data.hufflepuf}</p>
                        </div>
                    ) : (this.state.isComplete && this.state.resultFiltered === 3) ? (
                        <div className='result ravenclaw'>
                            <h2>Congradulations, you belong to Ravenclaw house!</h2>
                            <img src ={house3}  alt = 'Hogarts house'/>
                            <p>{data.ravenclaw}</p>
                        </div>
                    ) : (this.state.isComplete && this.state.resultFiltered === 4) ? (
                        <div className='result slytherin'>
                            <h2>Congradulations, you belong to Slytherin house!</h2>
                            <img src ={house4}  alt = 'Hogarts house'/>
                            <p>{data.slytherin}</p>
                        </div>
                    ) : null 
                }
            </div> 
        )
    
    }
  
}

export default Questions;

