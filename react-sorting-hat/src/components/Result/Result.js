import React from 'react';
import './Result.css';
import gryffindorCrest from '../../img/gryffindor-crest.png';
import ravenclawCrest from '../../img/ravenclaw-crest.png';
import hufflepuffCrest from '../../img/hufflepuff-crest.png';
import slytherinCrest from '../../img/slytherin-crest.png';

class Result extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            houses: [
                {
                    name: 'gryffindor',
                    img: gryffindorCrest,
                    flavor: "Founded by the daring Godric Gryffindor, Gryffindor House most values students who embody bravery, courage, and determination.  This valour need not be overt - many of Gryffindor's most famous alumni demonstrated their courage not through reckless acts of daring, but through their quiet, steadfast committment to protecting their friends and acting with honor.",
                    alumni: 'The well-known alumni of Gryffindor House include Harry Potter, Albus Dumbledore, Ron Weasley, Hermione Granger, and Minerva McGonagall.'
                },
                {
                    name: 'ravenclaw',
                    img: ravenclawCrest,
                    flavor: 'Founded by the formiddable Rowena Ravenclaw, Ravenclaw House most values students who display cleverness, quick wit, and resourcefulness.  The archetypal Ravenclaw student is very studious, but also prides themselves on using their learning for the good of others.',
                    alumni: 'The well-known alumni of Ravenclaw House include Garrick Ollivander, Filius Flitwick, Ignatia Wildsmith, and Luna Lovegood.'
                },
                {
                    name: 'hufflepuff',
                    img: hufflepuffCrest,
                    flavor: 'Founded by the magnanimous Helga Hufflepuff, Hufflepuff House most values students who are hard-working, loyal, and patient.  The typical Hufflepuff student is a fast friend, a patient mentor, and, when crossed, a fierce foe.  Hufflepuff is truly a house for those ready to build strong friendships and lasting connections.',
                    alumni: 'The well-known alumni of Hufflepuff House include Newt Scamander, Pomona Sprout, Bridget Wenlock, and Artemisia Lufkin.'
                },
                {
                    name: 'slytherin',
                    img: slytherinCrest,
                    flavor: 'Founded by the infamous Salazar Slytherin, Slytherin House most values students with ambition, self-sufficiency, and pure blood.  Somewhat tainted by its reputation for producing dark wizards, Slytherin House is far more than simply the "evil" house of Hogwarts.  Through Slytherin a talented individual can prove themselves and carve their name into the annals of history.',
                    alumni: 'The well-known alumni of Slytherin House include Tom Riddle, Merlin, Severus Snape, and Phineas Nigellus Black.'
                }
            ],
        };
    }
    render(){
        let houseObj;
        this.state.houses.forEach(x => {
            if (x.name === this.props.house) houseObj = x;
        })
        return (
            <div className={this.props.house}>
                <div className="top-left"></div>
                <div className="bottom-left"></div>
                <div className="house-title">
                    <h1>{houseObj.name.charAt(0).toUpperCase() + houseObj.name.slice(1)}</h1>
                </div>
                <img src={houseObj.img} alt='House crest' />
                <div className="house-info">
                    <p>{houseObj.flavor}</p>
                    <p>{houseObj.alumni}</p>
                </div>
                <div className="top-right"></div>
                <div className="bottom-right"></div>
            </div>
        );
    }
}

export default Result;