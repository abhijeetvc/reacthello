import React from 'react'
function CallbackEvent(){

    const[text,setText]=React.useState('')

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    const editUser=(user)=>{
        console.log(user);
    }

    return(
        <div>
            <h1>Callback Event</h1>
            <p>Text is: {text}</p>
            <CheckCallBack onInputChange={handleChange} updateData={editUser}/>
        </div>
    )
}

function CheckCallBack({onInputChange,updateData}){

    const data=[{
        id:1,
        name:'John'
    },{
        id:2,
        name:'Peter'
    }]

    return(
        <div>
            <h2>Child Component!!!</h2>
            <input type='text' onChange={onInputChange}/>
            <ul>
                {data.map((user)=>(
                    <div key={user.id}>
                        <li>{user.name}</li>
                        <button onClick={()=>updateData(user)}>Update</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CallbackEvent