import React, {Component} from 'react';
import '../css/body.css';

// Component to display the left side panel of the body of the details of a coin

class Body extends Component {

    //display
    render(){
        var details = this.props.details;
        return(
            <div className="left-panel">
                {/* image displaying the coin logo */}

                <img src={details.image.large} alt={details.name}></img>
                {/* other details */}
                <ul className="side-details">
                    {/* origin*/}
                    <li>Country of Origin - {details.country_origin}</li>

                    <li>Market Cap Rank - {details.market_cap_rank}</li>

                    <li>Date of Appearance - {details.genesis_date}</li>
                    <li>Coin Gecko - 
                        <ul>
                            <li>Rank - {details.coingecko_rank}</li>
                            <li>Score - {details.coingecko_score}</li>
                        </ul>
                    </li>
                    <li>Devveloper Score - {details.developer_score}</li>
                    <li>Community Score - {details.community_score}</li>
                    <li>Liquidity Score - {details.liquidity_score}</li>
                    <li>Public Interest Score - {details.public_interest_score}</li>
                </ul>
            </div>
        )
    }
}

export default Body;
