import React from 'react'

// props : information/properties passed from one component to another component.
//         props are immutable/cannot change

function StateExample(){

    const userObj={
        id:'',
        firstName:'',
        lastName:''
    }

    const[user,setUser]=React.useState(userObj)
    const[userList,setUserList]=React.useState([])

    const handleInput=(event)=>{
        console.log(event.target);
        setUser({...user,[event.target.name]:event.target.value})
    }

    const submitData=()=>{
        setUserList([...userList,user])
        document.getElementById('myform').reset() 
    }

    const editUser=(index)=>{
        console.log(index);
    }

    return(
        <div>
            <form id="myform">
                <label>FirstName : </label>
                <input type='text' onChange={handleInput} name='firstName'/>

                <label>LastName : </label>
                <input type='text' onChange={handleInput} name='lastName'/>

                <button type="button" onClick={submitData}>Submit</button>

            </form>

            <TableData userList={userList} message="Hello React"/>
        </div>
    )
}

function TableData(props){
    return(
        <div>
            <p>Message : {props.message}</p>
             <ul>
        {
            props.userList.map((usr)=>(
                <div key={usr.id}>
                     <li>{usr.firstName+" | "+usr.lastName}</li>
                    {/* <button onClick={()=>editUser(usr.id)}>Edit</button> */}
                </div>
            ))
        }
    </ul>
        </div>
       
    )
}

export default StateExample