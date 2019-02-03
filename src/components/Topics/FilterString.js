import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state={
            unFilteredArray:[`The`,`Quick`,`Brown`,`Fox`],
            userInput:``,
            filteredArray:[]
        }
    }
    handleUserInput(e){
        this.setState({
            userInput: e.target.value
        })
    }
render(){
    console.log("Filter String State: ",this.state)
    return(
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText"></span>
            <input className="inputLine" onChange={(e)=>this.handleUserInput} value={this.state.userInput}/>
            <button className="confirmationButton"></button>
            <span className="resultsBox filterStringRB"></span>
        </div>
    )

}
}
export default FilterString