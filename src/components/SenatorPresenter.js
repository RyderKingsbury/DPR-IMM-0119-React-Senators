import React, { Component } from 'react';
import { repubStyle, demStyle, indepStyle } from '../styles/senators'

class SenatorPresenter extends Component {
    render() {
        const individual = this.props.person
        let style;
        if(individual.party === 'Republican') {
            style = repubStyle
        }
        else if(individual.party === 'Democrat') {
            style = demStyle
        }
        else {
            style = indepStyle
        }
        return (
            <li style={style}>
                {individual.person.lastname} : {individual.person.birthday} : {individual.description}
            </li>
        );
    }
}

export default SenatorPresenter;
