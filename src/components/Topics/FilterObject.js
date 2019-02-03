import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()
        this.state={
            unFilteredArray: [{one:1},{two:2},{three:3}],
            userInput: ``,
            filteredArray:[]
        }
    }
    handleUserInput(e){
        this.setState({
            userInput: e.target.value
        })
    }
    handleCalcButton(e){
        //compare userInput to unFilteredArray
        //return an array with objects that have the given property
        const arr = []
        const uFArrCopy = this.state.unFilteredArray.slice()
        console.log("uFArrCopy:",uFArrCopy)
        let {one} = uFArrCopy[0]
        let {two} = uFArrCopy[1]
        let {three} = uFArrCopy[2]
        console.log("One:",one,"Two:",two,"Three:",three)
        console.log("UserInput",this.state.userInput)
          if(one == this.state.userInput){
              arr.push(one)
          }
          if(two == this.state.userInput){
              arr.push(two)
          }
          if(three == this.state.userInput){
              arr.push(three)
          }
          console.log(arr)
        this.setState({
            filteredArray: arr,
            userInput:``
        })
        
    }
render(){
    console.log("FilterObject State:", this.state)
    const arrDisplay = this.state.unFilteredArray.map((element,index)=>{
        return(
            <span key={index}>{element}</span>
        )
    })

    return(
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            {arrDisplay}
            {/* <span className="puzzleText">{arrDisplay}</span> */}
            <input className="inputLine" onChange={(e)=>this.handleUserInput(e)} value={this.state.userInput}/>
            <button className="confirmationButton" onClick={(e)=>this.handleCalcButton(e)}>Calculate</button>
            <span className="resultsBox filterObjectRB">{this.state.filteredArray}</span>
        </div>
    )

}
}
export default FilterObject