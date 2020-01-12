import React, {Component} from 'react';
import '../css/getDetails.css'
import Body from './Body.js'

// component to get the coins list

class GetDetails extends Component {
  
    // constructor and initialisation
    // state
    constructor(){
        super();
        this.state = {
            details: [],
            isLoaded: false
        };
    }

    componentDidMount(){
        //API to get details of the coin entered

        //call
        var  url = 'https://api.coingecko.com/api/v3/coins/' + this.props.nameId;
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                details: json
            })
        });
    }

    // display
    //render
    render(){
        var {details, isLoaded} = this.state;
        
        // page not loaded ==

        if(!isLoaded){
            return <div>Loading...</div>
        }
        // page loaded ==
        else{
            return (
                <div className="api">
                    {/* Coin header displaying coin name and symbol */}
                    
                    <header className="coinHeader">
                        <a href={details.links.homepage[0]}>{details.name} - {details.symbol}</a>
                    </header>

                    {/* Coin details body */}
                    <div className="container-fluid coinBody">
                        <div className="row">
                            <div className="col-sm-3">
                                {/* left side panel of the body */}
                                <Body details={details}/>
                            </div>
                            <div className="col-sm-9">
                                <div className="container description">
                                    {/* displaying the description as HTML */}
                                    <div dangerouslySetInnerHTML={{ __html: details.description.en }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default GetDetails;
