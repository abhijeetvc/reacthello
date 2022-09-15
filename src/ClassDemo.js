import React from 'react'

export default class ClassDemo extends React.Component{

    constructor(){
        super()
        this.state={
            value:0
        }
    }

    handleChange=()=>{
        this.setState({value:this.state.value+10})
    }

    render(){
        return(
            <div>
                <h1>Class Component!!!</h1>
                <button type='button' onClick={this.handleChange}>Change</button>
                <p>Value is: {this.state.value}</p>
                
            </div>
        )
    }
}

export class ClassDemo1 extends React.Component{

    render(){
        return(
            <div>
                <p>Class Demo1</p>
            </div>
        )
    }
}

// function Demo(){

//   const[value,setValue]=React.useState(0)

//     return(
//         <div>
//             <h1>Function Component!!!</h1>
//         </div>
//     )
// }

//export default ClassDemo