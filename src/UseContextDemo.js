
import React, { createContext, useContext } from 'react'

const MyContext=createContext()

function UseContextDemo(){

    const[number,setNumber]=React.useState(0)

    const users=[
        {
          name:"John",
          products:[{
            id:1,
            name:"P1"
          },{
            id:2,
            name:"P2"
          }]
        },{
          name:"Peter",
          products:[{
            id:3,
            product:"P3"
          }]
        }
        ]

    const[selectedUser,setSelectedUser]=React.useState()    

    const changeValue=()=>{
        setNumber(number+10)
    }

    const getUser=(user)=>{
        console.log(user);
        setSelectedUser(user)
    }

    return(
        <MyContext.Provider value={{number,selectedUser}}>
        <div>
            <h1>Use Context Demo!!!</h1>
            <p>Number is: {number}</p>
            <button type='button' onClick={changeValue}>Change</button>
            <ul>{
                   users.map((user)=>(
                    <div>
                        <li><a onClick={()=>getUser(user)}>{user.name}</a></li>
                    </div>
                    
                   ))
                }</ul>
            <CheckContext/>
            <CheckContextTwo/>
        </div>
        </MyContext.Provider>
    )
}

function CheckContext(){

    const {number,selectedUser}=useContext(MyContext)

    return(
        <div>
            <h2>Context Demo!!!</h2>
            <p>Number in CheckContext : {number}</p>
        </div>
    )
}

function CheckContextTwo(){

    const {number,selectedUser}=useContext(MyContext)
   
    return(
        <div>
            <h2>Context2 Demo!!!</h2>
            <p>Number in CheckContext2 : {number}</p>
            <p>Selected User Name: {selectedUser && selectedUser.name}</p>
        </div>
    )
}

export default UseContextDemo