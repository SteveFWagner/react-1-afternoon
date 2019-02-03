import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state={
            number1:0,
            number2:0,
            sum:null
        }
    }
    handleInputOne(e){
        this.setState({
            number1:e.target.value
        })
    }
    handleInputTwo(e){
        this.setState({
            number2:e.target.value
        })
    }
    handleCalcButton(){
        this.setState({
            sum:Number(this.state.number1)+Number(this.state.number2)
        })
    }
render(){
    // console.log("Current SUM State:",this.state)
    return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e)=>{this.handleInputOne(e)}} value={this.state.number1}/>
            <input className="inputLine" onChange={(e)=>{this.handleInputTwo(e)}} value={this.state.number2}/>
            <button className="confirmationButton" onClick={()=>{this.handleCalcButton()}}>Calculate</button>
            <span className="resultsBox">{this.state.sum}</span>
        </div>
    )

}
}
export default Sum