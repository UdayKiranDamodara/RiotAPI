import React, { useEffect, useState } from 'react'

import './styles/GameData.css'

const GameData = ({ gameId, summonerName }) => {

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
        const rawMatchData = await fetch(`/lol/match/v4/matches/${gameId}?api_key=RGAPI-85d4b894-bf52-4c77-92e7-11eda038c39c`)
        const parsedMatchData = await rawMatchData.json()
        //console.log("parsed Match Data", parsedMatchData)
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

        setDisplay(temp)
        
    }

    const getChampionName = async (id, data) => {
        const rawData = await fetch('https://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json')
        const parsedData = await rawData.json()
        const temp = Object.values(parsedData.data)
        const [temp2] = temp.filter(item => item.key == id)
        console.log(temp2.name)
        setDisplay((prevState)=>{
            const newState = {...prevState}
            newState.championName = temp2.name
            return newState
        })

    }

    return (
        <div>
            <div>{gameId}</div>
            <div>{summonerName}</div>
            <div className='game-card'>
                <div className="champion">
                    <img src={`https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${display.championName}.png`} />
                </div>
                <div className="summoners">

                </div>
                <div className="kda">
                    {`${display.kills}/${display.deaths}/${display.assists}`}
                </div>
                {/* <ul>
                    <li>{`${display.win}`}</li>
                    <li>{`${display.kills}`}</li>
                    <li>{`${display.deaths}`}</li>
                    <li>{`${display.assists}`}</li>
                    <li>{`${display.championId}`}</li>
                </ul> */}
            </div>
        </div>
    )
}

export default GameData