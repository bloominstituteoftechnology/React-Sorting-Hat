import React from 'react';
import './styles.css';

let houses = [
    {
        name: 'Slytherin', 
        history: `Slytherin house values ambition, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well, replaced Slughorn as Potions Professor when he retired for the first time several years prior. The Bloody Baron is the house ghost.The founder of the house was Salazar Slytherin.Slytherin corresponds roughly to the element of water.The Slytherin dormitories and common room are reached through a bare stone wall in the Dungeons.The Slytherin common room lies beneath the Black Lake.It is a long, low underground room with rough stone walls and silver lamps hanging from the ceiling.Famous Slytherins include Merlin, Tom Riddle, and Dolores Umbridge.`,
        img: "https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest/scale-to-width-down/160?cb=20160729150848"
    },
    {
        name: 'Ravenclaw', 
        history: `Ravenclaw values intelligence, knowledge, and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the house's founder.Ravenclaw corresponds to the element of air.The Ravenclaw common room and dormitories are located in a tower on the west side of the castle.Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories.This riddle, however, can be answered by non-Ravenclaws.Famous Ravenclaws include Gilderoy Lockheart, Ignatia Wildsmith(inventor of Floo powder), and Garrick Ollivander.`,
        img: "https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest?cb=20160729145945"
    },
    {
        name: 'Hufflepuff', 
        history: `Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and Yellow and Black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. The founder of the house was Helga Hufflepuff. Hufflepuff corresponds to the element of earth. The Hufflepuff dormitories and common room are located somewhere in the basement, near the castle's kitchens. It can be accessed by tapping the barrel two from the bottom, middle of the second row in the rhythm of "Helga Hufflepuff" and is described as being a cosy and welcoming place with yellow hangings, fat armchairs, and underground tunnels that lead to the dormitories, which have perfectly round doors, similar to barrel tops. Famous Hufflepuffs include Hengist of Woodcroft (founder of Hogsmeade), Newt Scamander, and Artemisia Lufkin (first female minister for magic).`,
        img: "https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest?cb=20160729145653"
    },
    {
        name: 'Gryffindor', 
        history: `Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion and its colours are scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the house ghost. The founder of the house was Godric Gryffindor. Gryffindor corresponds to the element of Fire. The common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and is guarded by a portrait of The Fat Lady. She permits entrance if given the correct password, which is changed numerous times throughout the school year. Famous Gryffindors include Albus Dumbledore, Harry Potter, and Celestina Warbeck.`,
        img: "https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/scale-to-width-down/182?cb=20160729145529"
    }
]

const Results = (props) => {
    let result = props.result;
    let house = 0;
    if (result < 10){
        house = 0;
    } else if (result < 15){
        house = 1;
    } else if (result < 20){
        house = 2;
    } else if (result <= 24){
        house = 3;
    }
    return(
        <div className={`results ${props.canShow ? 'visible' : ''}`}>
            <div className="resultsTitle">
                <h1>{houses[house].name}</h1>
                <img src={`${houses[house].img}`} alt="icon of house" />
            </div>
            <div className="content">
                <p>{houses[house].history}</p>
            </div>
        </div>
    )
}

export default Results;