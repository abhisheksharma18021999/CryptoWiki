import React, {Component} from 'react';
import GetDetails from './GetDetails.js'

// component to get the coins list

class GetCoinsList extends Component {

    // constructor and initialisation


    constructor(){
        super();
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    // buttonHandler(){
    //     if(this.props.btnClicked)
    //         alert("button clicked!");
    // }
     // buttonHandler(){
    //     if(this.props.btnClicked)
    //         alert("button clicked!");
    // }
     // buttonHandler(){
    //     if(this.props.btnClicked)
    //         alert("button clicked!");
    // }

    componentDidMount(){
        // API to find get the coins list 
        //this is the call
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
    render(){
        var {isLoaded, items} = this.state;
        var name = this.props.name;
        var btnClicked = this.props.btnClicked;

        // page not loaded
        if(!isLoaded){
            return <div>Loading the coin list</div>
        }
        // elsepage loaded
        else{
            var itemName = [];
            
            var itemId = [];

            var nameId = -1;
            items.map(item => (
                itemName.push(item.name),
                itemId.push(item.id)
            ))

            for(var i=0; i<items.length; i++){
                if(items[i].name==name){
                    nameId = items[i].id;
                    break;
                }
            }

            if(btnClicked){
                if(nameId == -1){
                    return(
                        <div>Sorry, the coin does not exist</div>
                    )
                }else{
                    return (
                        <div className="api">
                        <div>nameId: {nameId}</div>
                            <ol>
                                {items.map(item => (
                                    <li key={item.id}>
                                        Name: {item.name} | ID: {item.id}
                                    </li>
                                ))}

                            </ol>

                        {/* <GetDetails coinList={{itemName, itemId}} name={name}/> */}
                        </div>



                        // <GetDetails nameId = {nameId}/>
                         // <GetDetails nameId = {nameId}/>
                          // <GetDetails nameId = {nameId}/>
                    )
                }

            }
            else {
                return(
                    <div>Search for a coin</div>
                )
            }

        }

    }

}

export default GetCoinsList;
 