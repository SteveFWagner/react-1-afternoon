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
    handleCalcButton(e){
        //compare unFilteredArray to userInput - If one array matches
        const arrCopy = this.state.unFilteredArray.slice()
        const arr = arrCopy.filter((val)=>val==this.state.userInput)
        // console.log(arr)
        this.setState({
            filteredArray: arr,
            userInput:``
        })
    }
render(){
    // console.log("Filter String State: ",this.state)
    const displayUFArray = this.state.unFilteredArray.join(" ")
    return(
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">{displayUFArray}</span>
            <input className="inputLine" onChange={(e)=>this.handleUserInput(e)} 
            value={this.state.userInput} />
            <button className="confirmationButton" onClick={(e)=>this.handleCalcButton(e)}>Calculate</button>
            <span className="resultsBox filterStringRB">{this.state.filteredArray}</span>
        </div>
    )

}
}
export default FilterString