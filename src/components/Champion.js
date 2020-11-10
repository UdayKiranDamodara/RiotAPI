import React, {useState, useEffect, useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import './styles/Champion.css'

const ChampionList = (props) => {
    
    const [champ, setChamp] = useState({
        name:'',
        title: '',
        lore: '',
        stats: {
            hp: 0,
            hpperlevel: 0,
            mp: 0,
            mpperlevel: 0,
            movespeed: 0,
            armor: 0,
            armorperlevel: 0,
            spellblock: 0,
            spellblockperlevel: 0,
            attackrange: 0,
            hpregen: 0,
            hpregenperlevel: 0,
            mpregen: 0,
            mpregenperlevel: 0,
            attackdamage: 0,
            attackdamageperlevel: 0,
            attackspeed: 0,
            attackspeedperlevel: 0,
        },
        spells: []
    });
    
    const [name, setName] = useState('name');
    const [title, setTitle] = useState('')
    const [lore, setLore] = useState('')
    const [stats, setStats] = useState('')

    const [head, setHead] = useState(false)

    useEffect(() => {
        const id = props.match.params.id
        //console.log(id)
        fetch(`https://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion/${id}.json`)
        .then(res => res.json())
        .then(data => {
            setChamp(data['data'][`${id}`])
            })
    }, [])

    useEffect(()=>{
        // setName((prevName)=>{
        //     return (typeof(champ['name']) === undefined) ? prevName : champ['name'] })
        setName(champ['name'])
        setTitle(champ["title"])
        setLore(champ['lore'])
        setStats(champ['stats'])
        console.log('name', name)
        console.log('title', title)
        console.log('lore', lore)
        console.log('stats', stats)
        console.log(typeof(name))
        console.log(champ.spells)
    }, [champ, name, title, lore, stats])
    
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;

    return(
        <div className='outer_container'>
            <div className='level-1-container'>
                <div className='level-1-item name-lore'>
                    <div className='name-title'>
                        <h1 className='name'><strong>{name.toUpperCase()}</strong></h1>
                        <h3 className='title'>{title}</h3>
                    </div>                    
                    <h3 className='lore'>{lore}</h3>
                </div>
                <div className='level-1-item load-screen-image'>
                    <img alt={`${name}`} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`} />
                </div>
            </div>
            <div className='level-2-container'>
                <h2>Stats</h2>
                <div className='stats-container'>
                    <div className='left-container'>
                        <ul>
                            <li><strong>HP:</strong> {stats.hp +'+'+ stats.hpperlevel}</li>
                            <li><strong>HP regen:</strong> {`${stats.hpregen}+${stats.hpregenperlevel}`}</li>
                            <li><strong>Mana:</strong> {stats.mp +'+'+ stats.mpperlevel}</li>
                            <li><strong>Mana regen:</strong> {`${stats.mpregen}+${stats.mpregenperlevel}`}</li>
                            <li><strong>Move Speed:</strong> {`${stats.movespeed}`}</li>
                        </ul>
                    </div>
                    <div className='right-container'>
                        <ul>
                            <li><strong>Attack Damage:</strong> {stats.attackdamage +'+'+ stats.attackdamageperlevel}</li>
                            <li><strong>Attack Speed:</strong> {`${stats.attackspeed}+${stats.attackspeedperlevel}`}</li>
                            <li><strong>Armor:</strong> {stats.armor +'+'+ stats.armorperlevel}</li>
                            <li><strong>Magic Resist:</strong> {`${stats.spellblock}+${stats.spellblockperlevel}`}</li>
                            <li><strong>Attack Range:</strong> {`${stats.attackrange}`}</li>
                        </ul>
                    </div>
                    <div className='right-container'></div>
                </div>
            </div>
            <div className='level-3-container'>
                {champ.spells.map(spell => {
                    return(
                        <div className='ability' key={`${spell.id}`}>
                            <div className='ability-text'>
                                <h3>{spell.name}</h3>
                                <p>{spell.description}</p>
                            </div>
                            <div className='ability-image'>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/${spell.image.full}`}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChampionList;