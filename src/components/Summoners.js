import React, { useState, useEffect } from 'react'

import GameData from './GameData'

const Summoners = () => {

    const [key, setKey] = useState('RGAPI-85d4b894-bf52-4c77-92e7-11eda038c39c')
    const [summonerName, setSummonerName] = useState('finalbosszeref')

    const [fetchData, setFetchData] = useState('')
    const [matches, setMatches] = useState([''])


    useEffect(()=>{
        fetchMatchHistory()
    }, [fetchData])

    useEffect(()=>{
        console.log(matches)
    }, [matches])

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
        console.log('parsed Match History', parsedMatchHistory.matches)
        setMatches(parsedMatchHistory.matches)
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
                <div className='info'>{fetchData.accountId}</div>
                {(matches !== undefined ) ?
                    // matches.map(match => {
                    // return (
                    //     <GameData gameId={match.gameId} summonerName={summonerName}></GameData>
                    // )
                    // })
                    <GameData gameId={matches[0].gameId} summonerName={summonerName}></GameData>
                    : <div></div>
                }
                
            </div>
        </div>
    )
}

export default Summoners;