import React, {Component} from 'react';
import Heading from './Heading.js';

// component to get the coins list

class GetCoinsList extends Component {
  
    // constructor and initialisation
    // state to store data
    constructor(){
        super();
        this.state = {
            items: [],
            isLoaded: false
        };
    }



    componentDidMount(){
        // API to find get the coins list 
        // call
        fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        });
    }

    // display
    // the data is assigned
    render(){
        var {isLoaded, items} = this.state;

        // page not loaded ====
        if(!isLoaded){
            return <div>Loading the coin list</div>
        }
        // page loaded  =====
        else{
            return(
                <Heading items = {items}/>
            )
        }
        
    }

}

export default GetCoinsList;
