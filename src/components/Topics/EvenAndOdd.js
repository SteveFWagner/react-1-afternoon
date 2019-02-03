import React, {Component} from 'react' //import React and deconstructed Component

class EvenAndOdd extends Component{ //create the class "EvenAndOdd" that extends "Component"
    constructor(){ //Constuctor
        super() //always super ot it wont work!
        this.state ={ //set the initial state of the component object
            evenArray:[],
            oddArray:[],
            userInput:``
        }
        
    }
    handleUserInput(e){//we are calling on this method when a user types into the input field
        this.setState({ //this allows us to take take in the values for use and display them to the user
            userInput: e.target.value  //"e" is the event that occurs 
        })
    }
    handleCalcButton(e){//this method is called when a user clicks the "Calculate" button
        //In this component we need to get userInput, pass userInput into functions that separate them into even and odd
        const inputArray = this.state.userInput.split(",")//splitting the user input into and array
        const evArr = []
        const odArr = []
        for(let i = 0;i<inputArray.length;i++){
           inputArray[i] = Number(inputArray[i])//converting the string numbers to actual numbers
        }
        // console.log(inputArray)
        for(let j = 0;j<inputArray.length;j++){//pushing the evens and odds to new arrays 
           if(inputArray[j]%2 === 0){
                evArr.push(inputArray[j])
           }else if(inputArray[j]%2 === 1){
                odArr.push(inputArray[j])
           }
        }
        // console.log("New Array Outputs:", evArr,odArr)//checking the arrays prior to setting them to state
        this.setState({//setting state to display the separated arrays and clearing out the input field
            evenArray: evArr, 
            oddArray: odArr,
            userInput:``
        })
    }
    
    render(){//RENDER IT!
        // console.log("EvenAndOdd State:",this.state)//put state related console logs here, otherwise they may not be accurate due to timing
    return(//RETURN IT! HTML below, use {} around any JS
            //we need a containter, in this case we used a DIV. Listeners in this example are onClick and onChange
            //Both listeners use a JS arrow function to bind them ***ALWAYS BIND OR IT WONT WORK***
            //to get variables returned below use {} to pull them from the JS methods above

        <div className="puzzleBox evenAndOddPB"> 
        <h4>Evens And Odds</h4>
        <h7>Enter comma separated numbers below:</h7>
        <input className="inputLine" onChange={(e)=>this.handleUserInput(e)} value={this.state.userInput}/>
        <button className="confirmationButton" onClick={(e)=>this.handleCalcButton(e)}>Calculate</button>
        <span className="resultsBox">Even Values: {this.state.evenArray.join(`, `)}</span>
        <span className="resultsBox">Odd Values: {this.state.oddArray.join(`, `)}</span>
        </div>
        
    )

}
}
export default EvenAndOdd