
function PropsExample(){

    return(
        <div>
            <h1>Props Example</h1>
            <PropsChild message="Hello Props!!!"/>
        </div>
    )
}

function PropsChild(props){

    return(
        <div>
            <h2>Child Component</h2>
            <p>Message : {props.message}</p>
        </div>
    )
}

export default PropsExample