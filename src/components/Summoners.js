import React, { useState, useEffect } from 'react'

const Summoners = () => {

    const [key, setKey] = useState('RGAPI-f5eeff12-9e0b-49a7-a98f-09d34723e5bc')
    const [summonerName, setSummonerName] = useState('finalbosszeref')

    const [fetchData, setFetchData] = useState('')


    useEffect(()=>{
        fetchMatchHistory()
    }, [fetchData])

    const fetchSummoner = async () => {
        console.log(key, summonerName)
        // const rawFetchSummoner = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`, {mode: 'cors'})
        const rawFetchSummoner = await fetch(`/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`)
        const parsedSummoner = await rawFetchSummoner.json()
        console.log('fetch response', parsedSummoner)
        setFetchData(parsedSummoner)
        //fetchMatchHistory();
    }

    const fetchMatchHistory = async () => {
        const rawMatchHistory = await fetch(`/lol/match/v4/matchlists/by-account/${fetchData.accountId}?api_key=${key}`)
        const parsedMatchHistory = await rawMatchHistory.json()
        console.log('parsed Match History', parsedMatchHistory)
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
            <div className='summoner-data'>
                {fetchData.accountId}
            </div>
        </div>
    )
}

export default Summoners;