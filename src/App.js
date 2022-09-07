let person={
    id:1,
    name:"John",
    city:"Pune"
}

let message="Demo React Project!!!"

function App(){
  return(
    <div>
      <div>
    <h1>Hello React!!!</h1> 
    <p className="">This is React Demo!!!</p>
    <p>Hiiiiiii</p>
    <p>Message : {message}</p>
    <p> Id : {person.id}</p>
    <p> Name : {person.name}</p>
    <p> City : {person.city}</p>
  </div>
  <div>
    
  </div>  
  </div>
  )
}

export default App