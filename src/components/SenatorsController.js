import React, { Component } from 'react';
import SenatorPresenter from './SenatorPresenter'
import Senators from '../data/senators.json'
import './senate.css'

class SenatorsController extends Component {
    mapNames = group => {
        console.log('map', group)
        return group.map(senator => <SenatorPresenter person={senator} />)
    }
    filterByParty = party => {
        return Senators.filter(senator => senator.party === party)
    }
    render() {
        const repubs = this.filterByParty('Republican')
        const dems = this.filterByParty('Democrat')
        const indep = this.filterByParty('Independent')
        
        console.log('JSON', Senators[0])
        console.log('React', this.mapNames(Senators)[0])

        console.log('render', indep)
        return (
            <React.Fragment>
                <h2>Independent</h2>
                <ul>
                    {this.mapNames(indep)}
                </ul>
                <h2>Democrats</h2>
                <ul>
                    {this.mapNames(dems)}
                </ul>
                <h2>Republicans</h2>
                <ul className='repubs'>
                    {this.mapNames(repubs)}
                </ul>
            </React.Fragment>
            
        );
    }
}

export default SenatorsController;
