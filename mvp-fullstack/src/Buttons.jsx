
import React, {useState} from "react";
import Equipment from "./Equipment";
import * as ReactDOM from "react-dom";
// import WowHead from "./wowhead";
//import ReactScrollableList from 
//import Select from 
const apiUrl = 'http://localhost:8000'
const Buttons = () => {
    const [selected, setSelected] = useState('')
    const [lootList, setLootList] = useState([])
    const options = [   
    {value: 1, text: "Lord Marrowgar", },
    {value: 2, text: "Lady Deathwhisper", },
    {value: 3, text: "Gunship", },
    {value: 4, text: "Deathbringer Saurfang",},
    {value: 5, text: "Festergut",},
    {value: 6, text: "Rotface",},
    {value: 7, text: "Professor Putricide",},
    {value: 8, text: "Blood Prince Council",},
    {value: 9, text: "Blood-Queen Lana'thel",},
    {value: 10, text: "Valithria Dreamwalker",},
    {value: 11, text: "Sindragosa",},
    {value: 12, text: "The Lich King",}  ]
    
    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        fetch(`${apiUrl}/boss/${event.target.value}`, {method: "GET", mode: 'cors'})
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setLootList(data)
    })}
    const setImage = (event, param) => {
       var head = document.getElementById('Head')
       var heady = ReactDOM.findDOMNode(head)
       heady.style.backgroundImage = `url(${param.image})`
       heady.style.backgroundSize = 'cover'
       //console.log(event.target)
    }
    return(
        <div id='Buttons'>
            <select name='bosses' id='bossDropDown' value={selected} onChange={handleChange}>  
                {options.map( option => {
                    return <option value={option.value} key={option.value}>
                        {option.text}
                    </option>
                })}
            </select>
            <div style={{overflow: 'scroll', height: '60%', display: 'block'}}>
                {lootList.map(element => {
                    return <a href='#' data-wowhead={`item=${element.wowhead_id}&domain=wotlk`} class={'q4'} style={{'textDecorationLine': 'none'}}
                    key={element.loot_id} onClick={event => setImage(event, element)}>[{element.name}]</a>
                })}
            </div>
        </div>
    )
}

export default Buttons;