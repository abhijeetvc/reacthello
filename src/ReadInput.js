import React,{useState}  from "react";
//export const message="Hellooooo"

export default function ReadInput(){

   // let value=''

   // state variable
//    const[firstName,setFirstName]=useState('')
//    const[lastName,setLastName]=useState('')
//    const[city,setCity]=useState('')

    const userObj={
        firstName:'',
        lastName:''
    }

    const[user,setUser]=useState(userObj)

//    const setFirstNameValue=(event)=>{

//        // console.log(event.target);

//         //value=event.target.value 
//         setFirstName(event.target.value)
       
//        // console.log(value);
//     }

    // const setLastNameValue=(event)=>{

    //     // console.log(event.target);
 
    //      //value=event.target.value 
        
    //      setLastName(event.target.value)
    //     // console.log(value);
    //  }

    const setInputValue=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(user);
    }

    return(
        <div>
            <h1>Read Input!!!</h1>
            <input type="text" id="firstName" name="firstName" onChange={setInputValue}/>
            <input type="text" id="lastName" name="lastName" onChange={setInputValue}/>

            {/* <p>FirstName : {user.firstName}</p>
            <p>LastName : {user.lastName}</p> */}

            {/* {JSON.stringify(user)} */}

             <button type="button" onClick={readValue}>
                Display
            </button>
        </div>
    )
}

// export default ReadInput

// What is Real DOM and virtual DOM?