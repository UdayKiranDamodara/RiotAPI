import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import ChampionList from './ChampionList'
import Champion from './Champion'
import Summoners from './Summoners'
import ThemeContextProvider from '../contexts/ThemeContext'

const App = () => {
    return(
        <ThemeContextProvider>
            <Router>
                <Nav />
                <Switch>
                    <Route path='/League/Champions' exact component={ChampionList} />
                    <Route path='/League/Champions/:id' exact component={Champion} />
                    <Route path='/League/Summoners' exact component={Summoners} />
                    <Route path='/League/Summoners/:id' component={Summoners} />
                    <Route path='/League/' component={Home} />
                </Switch>            
            </Router>
        </ThemeContextProvider>
        
        
    )
}

export default App;