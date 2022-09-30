import React from 'react'

class LifecycleDemo extends React.Component{

    constructor(){
        super()
        this.state={
            userList:[{
                id:1,
                name:'A',
                city:'Pune'
            },{
                id:2,
                name:'B',
                city:'Mumbai'
            }],
            flag:false
        }
    }

    // executes only once
    componentDidMount(){
        console.log('hiiiiii');
    }

    user={
        id:3,
        name:'C',
        city:'Bangalore'
    }
    // executes whenever state changes
    componentDidUpdate(){
        console.log('In Component Did Update');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(res=>{
             console.log(res);
        })
    }

    loadMoreData=()=>{
        this.setState({flag:true})
    }

    render(){

        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>

                <ul>
                    {
                        this.state.userList.map((user)=>(
                            <li>{user.name}</li>
                        ))
                    }
                </ul>
                <button type='button' onClick={this.loadMoreData}>Load More</button>
            </div>
        )
    }
}

export default LifecycleDemo