import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import GameData from './GameData'

import './styles/Summoners.css'

const Summoners = () => {

    const [key, setKey] = useState('')
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
        const rawFetchSummoner = await fetch(`https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`)
        const parsedSummoner = await rawFetchSummoner.json()
        console.log('fetch response', parsedSummoner)
        setFetchData(parsedSummoner)
        //fetchMatchHistory();
    }

    const fetchMatchHistory = async () => {
        const rawMatchHistory = await fetch(`https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${fetchData.accountId}?api_key=${key}`)
        const parsedMatchHistory = await rawMatchHistory.json()
        console.log('parsed Match History', parsedMatchHistory.matches)
        setMatches(parsedMatchHistory.matches)
    }

    return(
        <div className='summoner'>
            <div className='inputs'>
                <input type='text'
                    className='input-item'
                    placeholder='Riot Games Developer Key'
                    value={`${key}`}
                    onChange={(event)=>{setKey(event.target.value)}}
                />
                <input type='text'
                    className='input-item'
                    placeholder='Summoner Name'
                    // value={`${summonerName}`}
                    onChange={(event)=>{setSummonerName(event.target.value)}}
                />
                <button className='input-item' onClick={fetchSummoner}>Search</button>
            </div>
            <div className='summoner-data'>
                {/* <div className='info'>{fetchData.accountId}</div> */}
                {(matches !== undefined ) ?
                    // matches.map(match => {
                    // return (
                    //     <GameData gameId={match.gameId} summonerName={summonerName}></GameData>
                    // )
                    // })
                    //<GameData gameId={matches[0].gameId} summonerName={summonerName}></GameData>
                    matches.filter((item, id) => id < 10).map(
                        item => 
                            <GameData gameId={item.gameId} summonerName={summonerName} apiKey={key}></GameData>
                        )
                    : <div></div>
                }
                
            </div>
        </div>
    )
}

export default Summoners;