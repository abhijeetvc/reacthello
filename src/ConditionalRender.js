import React from 'react'

function ConditionalRender(){

    const[flag,setFlag]=React.useState(false)

    const checkContent=()=>{
        if(flag){
            return <h2>Hiiiiiii</h2>
        }else{
            return <h2>Hellooooo</h2>
        }
    }

    const changeData=()=>{
        setFlag(!flag)
    }

    return(
        <div>
            <h1>Conditional Render!!!</h1>
            <button onClick={changeData}>Change</button>
            {
                checkContent()
            }
        </div>
    )
}

export default ConditionalRender
