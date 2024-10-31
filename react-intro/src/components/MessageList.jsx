export function HelloMessage(props) {
    const {msg, isLoud} = props; // destructuring the props
    console.log("msg :", msg);
    console.log("isLoud :", isLoud)
 
    let text=msg;
 
    if (isLoud) {
        text=text.toUpperCase();
    }
    
    return <li>{text}</li>;}

function GoodbyeMessage(props) {
    return <li>See ya later!</li>;
}

export function MessageList(props) {
    return (
        <div>
            <ul>
            <HelloMessage msg="Hola Amigo!!!" isLoud={true}/>
            <HelloMessage msg="Example 2 - not loud" isLoud={false}/>
            <HelloMessage msg="Example 3 - Loud" isLoud={true}/>
            <HelloMessage msg="Example 4 - Loud" isLoud={true}/>
            <HelloMessage msg="" isLoud={true}/>
                <GoodbyeMessage /> {/* A GoodbyeMessage component */}
            </ul>
        </div>
    );
}
