import React, { useEffect, useState } from 'react'

import './styles/GameData.css'

const GameData = ({ gameId, summonerName, apiKey }) => {

    //const [me, setMe] = useState(gameId)
    useEffect(()=>{
        fetchMatchData()
    },[gameId])

    let participantId

    const [matchData, setMatchData] = useState({
        "participants": [

        ],
        "participantIdentities": [

        ]
    })

    const [display, setDisplay] = useState({
        win: '',
        spell1Id: '',
        spell2Id: '',
        kills: '',
        deaths: '',
        assists: '',
        championName: '',
    })

    useEffect(()=>{
        fetchMatchData()
    }, [])

    useEffect(()=>{
        //console.log("participant Identities", matchData.participantIdentities)
        getParticipantId()
    }, [matchData])

    useEffect(()=>{
        console.log('display', display)
    }, [display])

    const fetchMatchData = async () => {
        const rawMatchData = await fetch(`https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${apiKey}`)
        const parsedMatchData = await rawMatchData.json()
        console.log("parsed Match Data", parsedMatchData)
        setMatchData(parsedMatchData)
    }

    const getParticipantId = () => {
        let data
        if(matchData.participantIdentities !== undefined) {data = (matchData.participantIdentities.filter(item => item.player.summonerName.toLowerCase() === summonerName)[0])}
        if(data!==undefined && data.participantId !== undefined){
            participantId = data.participantId
            //console.log(participantId)
            getPlayerInfo()
        }
        //if(matchData.participantIdentities !== undefined) {(matchData.participantIdentities.forEach(item => console.log(item.player.summonerName.toLowerCase() === summonerName)))}
    }

    const getPlayerInfo = () =>{
        const participants = matchData.participants
        console.log(participants)
        const [info] = participants.filter(item => participantId === item.participantId)
        console.log(info)

        const temp = {
            win: info.stats.win,
            spell1Id: info.spell1Id,
            spell2Id: info.spell2Id,
            kills: info.stats.kills,
            deaths: info.stats.deaths,
            assists: info.stats.assists,
        }
        getChampionName(info.championId)
        getSummonerSpellName(info.spell1Id, 1)
        getSummonerSpellName(info.spell2Id, 2)
        setDisplay(temp)
        
    }

    const getChampionName = async (id) => {
        const rawData = await fetch('https://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json')
        const parsedData = await rawData.json()
        const temp = Object.values(parsedData.data)
        const [temp2] = temp.filter(item => item.key == id)
        console.log(temp2.id)
        setDisplay((prevState)=>{
            const newState = {...prevState}
            newState.championName = temp2.id
            return newState
        })
    }

    const getSummonerSpellName = async (id, num) => {
        const rawData = await fetch('https://cors-anywhere.herokuapp.com/https://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/summoner.json')
        const parsedData = await rawData.json()
        const temp = Object.values(parsedData.data)
        const [temp2] = temp.filter(item => item.key == id)
        console.log('summoner spell Id', temp2.id);
        (num === 1) ?
            setDisplay((prevState)=>{
                const newState = {...prevState}
                newState.spell1Name = temp2.id
                return newState
            }) :
            setDisplay((prevState)=>{
                const newState = {...prevState}
                newState.spell2Name = temp2.id
                return newState
            })

    }

    return (
        <div>
            {/* <div>{gameId}</div>
            <div>{summonerName}</div> */}
            {(display.championName !== '') ?
                <div className='game-card' style={{backgroundColor: (display.win)?"springgreen":"rgb(197, 67, 35)"}}>
                    <div className='game-mode'>{matchData.gameMode}</div>
                    <div className="champion">
                        <img classname='gamecard-champ-image' src={`https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${display.championName}.png`} />
                        <div>{display.championName}</div>
                    </div>
                    <div className="summoners">
                        <img width='40px' height='40px' src={`https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${display.spell1Name}.png`} />
                        <img width='40px' height='40px' src={`https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${display.spell2Name}.png`} />
                    </div>
                    <div className='info'>
                        <div className="kda">
                            <div>{`${display.kills}/${display.deaths}/${display.assists}`}</div>
                            <div>K/D/A</div>
                        </div>
                        <hr />
                        <div className='duration'>{Math.floor(matchData.gameDuration/60)}m {matchData.gameDuration%60}s</div>    
                    </div>

                </div>
            : <div></div>}
        </div>
    )
}

export default GameData