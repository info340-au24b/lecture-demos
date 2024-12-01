// import React, { useState } from 'react';

// export function ComposeForm(props) {
//   const { addMessageFunction, currentChannel, currentUser } = props;

//   const [inputtedText, setInputtedText] = useState('');

//   //typing
//   const handleChange = (event) => {
//     const value = event.target.value;
//     setInputtedText(value);
//   }

//   //submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     addMessageFunction(currentUser, inputtedText, currentChannel);   
//     setInputtedText('');
//   }

//   return (
//     <form className="my-2" onSubmit={handleSubmit}>
//       <div className="input-group">
//         <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
//         <textarea className="form-control" rows="2" placeholder="Type a new message"
//           onChange={handleChange}
//           value={inputtedText}
//         />
//         <button
//           className="btn btn-secondary" type="submit">
//           <span className="material-icons">send</span>
//         </button>
//       </div>
//     </form>
//   );
// }

import React, { useState } from 'react';

export function ComposeForm(props) {
  const [typedValue, setTypedValue] = useState("");

  const currentUser = props.currentUser;
  const addMessageCallback = props.addMessageCallback;

  const handleChange = (event) => {
    const inputtedValue = event.target.value;
    setTypedValue(inputtedValue); //update state and re-render!
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", typedValue);

    addMessageCallback(typedValue) //call the function

    setTypedValue(""); //empty the input!
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        {currentUser.userId &&
          <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
        }
        <textarea className="form-control" rows="2" placeholder="Type a new message" onChange={handleChange}></textarea>
        <button className="btn btn-secondary" type="submit" disabled={currentUser.userId === null}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}