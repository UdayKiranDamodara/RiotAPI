import React, { useState, useEffect } from 'react'

const Summoners = () => {

    const [key, setKey] = useState('')
    const [summonerName, setSummonerName] = useState('')

    const fetchSummoner = async () => {
        console.log(key, summonerName)
        // const rawFetchSummoner = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`, {mode: 'cors'})
        const rawFetchSummoner = await fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/scarlet%20fan?api_key=RGAPI-7043fe11-850f-45f9-b169-dea57a49a547')
        const parsedSummoner = await rawFetchSummoner.json()
        console.log('fetch response',parsedSummoner)
    }



    return(
        <div className='summoner'>
            <div className='inputs'>
                <input type='text'
                    placeholder='Developer Key'
                    value={`${key}`}
                    onChange={(event)=>{setKey(event.target.value)}}
                />
                <input type='text'
                    placeholder='Summoner Name'
                    value={`${summonerName}`}
                    onChange={(event)=>{setSummonerName(event.target.value)}}
                />
                <button onClick={fetchSummoner}>Submit</button>
            </div>
        </div>
    )
}

export default Summoners;