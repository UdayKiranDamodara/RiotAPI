import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext';

import './styles/ChampionList.css'

const ChampionList = () => {

    const [list, setList] = useState([]);
    const [updatedList, setUpdatedList] = useState([]);
    const [head, setHead] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json')
        .then(res => res.json())
        .then(data => {
            console.log('not lis',Object.keys(data.data))
            setList(Object.keys(data.data));
            setUpdatedList(Object.keys(data.data));
            console.log('list', list)
            setHead(true)
            })
    }, [])

    useEffect(() => {
        (inputValue === '') ? setUpdatedList(list) : setUpdatedList(list.filter(champion => champion.toLowerCase().includes(inputValue.toLowerCase())))
    },[inputValue])

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;

    return(
        <div style={{ background: theme.bg }}>
            <div style={{ background: theme.ui, color: theme.syntax }} className='champlist'>
                <div className='searchbar-container'>
                    <input
                        className='searchbar'
                        type="text"
                        placeholder='Champion Name'
                        value={`${inputValue}`}
                        onChange={(event) => setInputValue(event.target.value)}></input>
                </div>

                <div className='champlist-container'>
                    {updatedList.map(champion => {
                        return(
                            <Link className='champlist-item'
                                style={{ background: theme.ui, color: theme.syntax }}
                                key={`${champion}`}
                                to={`/Champions/${champion}`}>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/${champion}.png`}></img>
                                    <h3>{champion}</h3>
                            </Link>
                        )
                        })
                    }
                </div>

            </div>
        </div>

    )
}

export default ChampionList;
