import React from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
           // userList:[]
           number:0
        }
    }

    // executes only once
    componentDidMount(){
        console.log('hiiiiii');
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response=>response.json())
        // .then(res=>{
        //      this.setState({userList:res})
        // })
    }

    // executes whenever state changes
    componentDidUpdate(){
        console.log('In Component Did Update: '+this.state.number);
    }

    changeValue=()=>{
        this.setState({number:this.state.number+1})
    }

    decrementValue=()=>{
        this.setState({number:this.state.number-1})
    }

    render(){

        const component=this.state.number ? <ComponentOne/> : <ComponentTwo/>

        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <button onClick={this.changeValue}>Change</button>
                <button onClick={this.decrementValue}>Decrement</button>
                <p>Number is: {this.state.number}</p>
                {component}
                {/* <ul>
                    {
                        this.state.userList.map((user)=>(
                            <li>{user.username}</li>
                        ))
                    }
                </ul> */}
            </div>
        )
    }
}

export default LifeCycleMethods