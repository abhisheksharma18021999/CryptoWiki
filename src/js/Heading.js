import React, {Component} from 'react';
import '../css/Heading.css';
import GetId from './GetId.js';

// Component to display heading - input form and some text

class Heading extends Component {
  
    //constructor
    //state
    constructor(){
        super();
        this.state = {
            name: '',
            btnClicked: false
        }
    }

    //To get value of input field
    
    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        //set btnClicked as false

        this.setState({btnClicked: false})
    }

    //To set btnClicked as true in case the button is clicked

    buttonHandler = (e) => {
        const state = this.state;
        this.setState({btnClicked: true});
    }


    //display
    //render
    render(){
        const {name, btnClicked} = this.state;
    
        return(
            <div className="headingStyles">
              {/* form */}
              <div className="input-group input-group-sm">
                  <input type="text" placeholder="Enter the Crypto Currency name" name="name" id="name" className="form-control" onChange={this.inputChangeHandler}/>
                  <button className="btn btn-success btn-sm" onClick={this.buttonHandler.bind(this)}>Get Info about coin</button>
              </div>
        
              {/* GetId component displayed here */}
              <GetId items={this.props.items} name={name} btnClicked={btnClicked}/>

            </div>
        )
    }

}

export default Heading;
