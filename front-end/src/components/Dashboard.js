import React from 'react';
import InputForm from './InputForm';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
      
    }

    render() {
        return <InputForm/>;
    }





}