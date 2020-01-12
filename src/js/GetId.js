import React, {Component} from 'react';
import GetDetails from './GetDetails.js'

// component to get the coins list

class GetId extends Component {

    // display
    render(){
        var items = this.props.items;
        var name = this.props.name;
        var btnClicked = this.props.btnClicked;

        var nameId = -1;

        //To find out the coin ID corresponding to the name / ID given
        //using loop

        for(var i=0; i<items.length; i++){
            if(items[i].name === name || items[i].id === name){
                nameId = items[i].id;
                break;
            }
        }

        //If the name given is final, i.e. button was clicked

        if(btnClicked){
            //If the name wasn't found in the coin list
            if(nameId === -1){
                return(
                    <div>Sorry, the coin does not exist</div>
                )
            }

            //The name was found in the coin list

            else{
                return (
                    <div className="api"> 
                        {/* GetDetails component called and the id of the coin passed */}
                        <GetDetails nameId = {nameId}/>
                    </div>
                )
            }   
        }
        //Button has not been clicked or the input has been changed
        
        else {
            return(
                <div>Search for a coin</div>
            )
        }
    }
}

export default GetId;