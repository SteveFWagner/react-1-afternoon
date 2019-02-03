import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super()
        this.state={
            userInput:``,
            palindrome:``
        }
    }
    handleUserInput(e){
        this.setState({
            userInput:e.target.value
        })
    }
    handleCalcButton(){
        if(this.state.userInput == this.state.userInput.split("").reverse().join("")){
            this.setState({
                palindrome:this.state.userInput+` is a palindrome!`
            })
        } else{
            this.setState({
                palindrome:this.state.userInput+` is NOT a palindrome`
            })
        }
    }
render(){
    console.log("Current Palindrome State:",this.state)
    return(
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" placeholder="Input Potential Palindrome Here"
            onChange={(e)=>{this.handleUserInput(e)}} value={this.state.userInput}/>
            <button className="confirmationButton" onClick={(e)=>{this.handleCalcButton()}}>Calculate</button>
            <span className="resultsBox">{this.state.palindrome}</span>
        </div>
    )

}
}
export default Palindrome