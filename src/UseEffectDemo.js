import React,{ useEffect } from "react"

function UseEffectDemo(){

    const[userList,setUserList]=React.useState([])

    const[value,setValue]=React.useState(0)

    // two parameters --> callback function, dependency array


    // a) UseEffect with only callback function

    // useEffect(()=>{
    //     console.log('hiiii');
    // })

    // b) UseEffect with callback function and empty dependency array == componentDidMount
    // useEffect(()=>{
    //     console.log("Hiiiii");
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=>response.json())
    //     .then(res=>{
    //          setUserList(res)
    //     })
    // },[])

    // c) UseEffect with callback function and dependency array values == componentDidUpdate && componentDidMount
    useEffect(()=>{
        console.log("Hiiiii");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(res=>{
            console.log(res);
             setUserList(res)
        })
    },[value])

    const changeValue=()=>{
        console.log('helloooooo');
        setValue(value+10)
    }

    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <ul>
                {
                    userList.map((user)=>(
                        <li>{user.username}</li>
                    ))
                }
            </ul>
            <button type="button" onClick={changeValue}>Change</button>
        </div>
    )
}

export default UseEffectDemo