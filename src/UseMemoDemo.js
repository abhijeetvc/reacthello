import React from 'react'

function UseMemoDemo(){

    const users=[{
        id:1,
        name:"John"
    },{
        id:2,
        name:"Peter"
    },{
        id:3,
        name:"Richard"
    }]

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const handleInput=(event)=>{
        setText(event.target.value)
    }

    const handleSearch=()=>{
        setSearch(text)
    }

    const filteredData=React.useMemo(()=>users.filter((user)=>{
        console.log('hiiiiiiii');
        return user.name.toLowerCase().includes(search.toLowerCase())
    }),[search])

    return(
        <div>
            <h1>Use Memo Demo</h1>
            <input type="text" onChange={handleInput}/>
            <button type="button" onClick={handleSearch}>Search</button>
            <UserList users={filteredData}/>
        </div>
    )
}

function UserList({users}){
console.log(users);
    return(
        <div>
            <ul>
                {
                    users.map((user)=>(
                        <li>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseMemoDemo