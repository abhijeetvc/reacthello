
import React, { createContext, useContext } from 'react'

const MyContext=createContext()

function UseContextDemo(){

    const[number,setNumber]=React.useState(0)

    const usersList=[
        {
          id:1,  
          name:"John",
          products:[{
            id:1,
            name:"P1"
          },{
            id:2,
            name:"P2"
          }]
        },{
            id:2,
          name:"Peter",
          products:[{
            id:3,
            product:"P3"
          }]
        }
        ]

    const[users,setUsers]=React.useState(usersList)    

    const[selectedUser,setSelectedUser]=React.useState()    

    const changeValue=()=>{
        setNumber(number+10)
    }

    const getUser=(user)=>{
        console.log(user);
        setSelectedUser(user)
    }

    return(
        <MyContext.Provider value={{number,selectedUser,setSelectedUser,users,setUsers}}>
        <div>
            <h1>Use Context Demo!!!</h1>
            <p>Number is: {number}</p>
            <button type='button' onClick={changeValue}>Change</button>
            <p>Selected User : {selectedUser && selectedUser.name}</p>
            {JSON.stringify(selectedUser)}
            <ul>
                {
                    selectedUser && selectedUser.products.map((p)=>(
                        <li>{p.name}</li>
                    ))
                }
            </ul>
            <ul>{
                   users.map((user)=>(
                    <div>
                        <li><a onClick={()=>getUser(user)}>{user.name}</a></li>
                    </div>
                    
                   ))
                }</ul>
            <CheckContext/>
            {/* <CheckContextTwo/> */}
        </div>
        </MyContext.Provider>
    )
}

function CheckContext(){
    
    const {number,selectedUser,setSelectedUser,users,setUsers}=useContext(MyContext)
    
    const productObj={
        id:'',
        product:''
    }

    const[product,setProduct]=React.useState(productObj)

    const handleChange=event=>{
        setProduct({...product,[event.target.name]:event.target.value})
    }

    const addProduct=()=>{
        const tempData=[...users]
        console.log(tempData);
        let selObj=tempData.findIndex((u)=>u.id===selectedUser.id)
        console.log(selObj);

        tempData[selObj].products.push(product)
        setSelectedUser(tempData[selObj])

        setUsers(tempData)

    }

    return(
        <div>
            <h2>Context Demo!!!</h2>
            <p>Number in CheckContext : {number}</p>

            <form>
                <input type='number' name="id" onChange={handleChange}/>
                <input type='text' name="product" onChange={handleChange}/>
                <button type='button' onClick={addProduct}>Add</button>
            </form>
            {
                JSON.stringify(users)
            }
        </div>
    )
}

// function CheckContextTwo(){

//     const {number,selectedUser,users,setUsers}=useContext(MyContext)
    
//     return(
//         <div>
//             <h2>Context2 Demo!!!</h2>
//             <p>Number in CheckContext2 : {number}</p>
//             <p>Selected User Name: {selectedUser && selectedUser.name}</p>
//         </div>
//     )
// }

export default UseContextDemo