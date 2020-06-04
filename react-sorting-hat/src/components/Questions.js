import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const animals = [
    'lion',
    'badger',
    'eagle',
    'snake'
]

const traits = [
    'brave',
    'loyal',
    'wise',
    'cunning'
]

const colors = [
    'scarlet and gold',
    'yellow and black',
    'blue and bronze',
    'green and silver'
]

const ghoasts = [
    'Nearly Headless Nick',
    'Fat Friar',
    'Grey Lady',
    'Bloody Baron'
]

const moreTraits = [
    'daring',
    'patient',
    'intelligent',
    'ambitious'
]

const elements = [
    'fire',
    'earth',
    'air',
    'water'
]

const Questions = (props) => {
    const { values, onInputChange } = props

    const [gryffindor, setGryffindor] = useState(0)
    const [hufflepuff, setHufflepuff] = useState(0)
    const [ravenclaw, setRavenclaw] = useState(0)
    const [slytherin, setSlytherin] = useState(0)
    // debugger

    const countPoints = () => {
        const valuesArr = [values.animals, values.traits, values.colors, values.ghoasts, values.moreTraits, values.elements]
        const gryf = ['lion', 'brave', 'daring', 'scarlet and gold', 'Nearly Headless Nick', 'fire']
        const huffle = ['badger', 'loyal', 'yellow and black', 'Fat Friar', 'patient', 'earth']
        const raven = ['eagle', 'wise', 'blue and bronze', 'Grey Lady', 'intelligent', 'air']
        const slyth = ['snake', 'cunning', 'green and silver', 'Bloody Baron', 'ambitious', 'water']

        const gryfPoints = valuesArr.filter(value => {
            return gryf.includes(value)
        }).length

        const hufflePoints = valuesArr.filter(value => {
            return huffle.includes(value)
        }).length

        const ravenPoints = valuesArr.filter(value => {
            return raven.includes(value)
        }).length

        const slythPoints = valuesArr.filter(value => {
            return slyth.includes(value)
        }).length

        // console.log(valuesArr, gryffindor, gryfPoints , hufflePoints, ravenPoints, slythPoints );
        const pointsArray = [gryfPoints, hufflePoints, ravenPoints, slythPoints]
        const path = ['/gryffindor', '/hufflepuff', '/ravenclaw', '/slytherin']
        // console.log(Math.max(...pointsArray))

        const showMeTheWay = path[pointsArray.indexOf(Math.max(...pointsArray))]


        console.log(showMeTheWay)

        return showMeTheWay;

    }




    return (
        // <form onSubmit={e => e.preventDefault()}>
        <form>

            <h2> Pick an animal :</h2>
            <div className='questionCard' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {animals.map(animal => {
                    return (
                        <label key={animal}>
                            <div>{animal}</div>
                            <input
                                type='radio'
                                name='animals'
                                value={animal}
                                onChange={onInputChange}
                            />
                        </label>
                    )
                })}

            </div>

            <h2> Which trait describes you best :</h2>
            <div className='questionCard' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {traits.map(trait => {
                    return (
                        <label key={trait}>
                            <div>{trait}</div>
                            <input
                                type='radio'
                                name='traits'
                                value={trait}
                                onChange={onInputChange}
                            />
                        </label>
                    )
                })}
            </div>

            <h2> Pick a color combination :</h2>
            <div className='questionCard' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {colors.map(color => {
                    return (
                        <label key={color}>
                            <div>{color}</div>
                            <input
                                type='radio'
                                name='colors'
                                value={color}
                                onChange={onInputChange}
                            />
                        </label>
                    )
                })}
            </div>

            <h2> Which Ghoast would you like to have a conversation with :</h2>
            <div className='questionCard' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {ghoasts.map(ghoast => {
                    return (
                        <label key={ghoast}>
                            <div>{ghoast}</div>
                            <input
                                type='radio'
                                name='ghoasts'
                                value={ghoast}
                                onChange={onInputChange}
                            />
                        </label>
                    )
                })}
            </div>

            <h2> Pick your value :</h2>
            <div className='questionCard' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {moreTraits.map(moreTrait => {
                    return (
                        <label key={moreTrait}>
                            <div>{moreTrait}</div>
                            <input
                                type='radio'
                                name='moreTraits'
                                value={moreTrait}
                                onChange={onInputChange}
                            />
                        </label>
                    )
                })}
            </div>

            <h2> Pick an element </h2>
            <div className='questionCard' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {elements.map(element => {
                    return (
                        <label key={element}>
                            <div>{element}</div>
                            <input
                                type='radio'
                                name='elements'
                                value={element}
                                onChange={onInputChange}
                            />
                        </label>
                    )
                })}

            </div>

            {/* <Link to={`/${values.elements === 'fire' && 'results'}`}> */}
            <Link to={`${countPoints()}`}>
                <button onClick={() => countPoints()}>Submit</button>
            </Link>

        </form>
    )
}


export default Questions;