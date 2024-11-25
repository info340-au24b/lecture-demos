import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom';

import { ComposeForm } from './ComposeForm.jsx';

export function ChatPane(props) {
  const { messageArray, addMessageFunction, currentUser} = props;

  //from url parameters
  const paramsObj = useParams();
  const currentChannel = paramsObj.chanName || "general" //default

  /** RENDERING: what do we look like **/

  //data processes
  const messagesToShow = messageArray
    .filter((messageObj) => {
      return messageObj.channel === currentChannel; //keep
    })
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

  //content to display
  const messageElemArray = messagesToShow.map((messageObj) => {
    const messageElem = (
      <MessageItem messageData={messageObj} key={messageObj.timestamp} />
    );
    return messageElem; //put it in the new array!
  });

    const handleTestClick = (event) => {
    console.log("testing...");

  }

  return (
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
      <Button className="justify-content-start" variant="warning" onClick={handleTestClick}> Test</Button>
      <p></p>
          
          {/* conditional rendering */}
           { messageElemArray.length === 0 && 
            <p>No messages found</p>
          }

          {messageElemArray}
        </div>

        <ComposeForm 
          currentUser={currentUser}
          currentChannel={currentChannel} 
          addMessageFunction={addMessageFunction} />
    </>
  )
}

function MessageItem(props) {
  const messageData = props.messageData;
  const {userName, userImg, text, isLiked} = messageData;

  const handleClick = function(event) {
    console.log("you like me! you really like me!")
  }


  //decide what it looks like
  let buttonColor = "grey";
  if(isLiked) {
    buttonColor = "red"; //filled in
  }

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}

// //Slide 17
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button'
// import { getDatabase, ref} from 'firebase/database'; //realtime database

// export function ChatPane(props) {
//   const currentChannel = props.currentChannel;
//   const chatMessages = props.chatMessages;
//   // console.log("rendering ChatPane"); //debugging

//   //only show current channel messages
//   //sorted in reverse order by timestamp
//   const channelMessages = chatMessages
//     .filter((msgObj) => {
//       return msgObj.channel === currentChannel;
//     })
//     .sort((a, b) => b.timestamp - a.timestamp);

//   const messageItemArray = channelMessages.map((messageObj) => {
//     const element = (
//       <MessageItem
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return element;
//   })

//   const handleTestClick = (event) => {
//     console.log("testing...");

//     //add to database
//     const db = getDatabase();
//     const messageRef = ref(db, "message") //refers to the message key in the database
//     console.log(messageRef);

//     const profLastNameRef = ref(db, "professor/lastName");
//     console.log(profLastNameRef);

//   }


//   if (channelMessages.length === 0) {
//     return <p>No messages on this channel yet!</p>
//   }

//   return (
//     <div className="scrollable-pane">
//       <div className="pt-2 my-2">
//         <Button className="justify-content-start" variant="warning" onClick={handleTestClick}> Test</Button>
//         <p> </p>
//         {messageItemArray}
//       </div>
//     </div>
//   )
// }

// function MessageItem(props) {
//   const { userName, userImg, text } = props.messageData;

//   //state
//   const [isLiked, setIsLiked] = useState(false);

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post!");
//     setIsLiked(!isLiked); //toggle
//   }

//   //RENDERING
//   let heartColor = "grey";
//   if (isLiked) {
//     heartColor = "red";
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <div className="me-2">
//         <img src={userImg} alt={userName + "'s avatar"} />
//       </div>
//       <div className="flex-grow-1">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// //Slide 20
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button'
// import { getDatabase, ref, set as firebaseSet} from 'firebase/database'; 

// export function ChatPane(props) {
//   const currentChannel = props.currentChannel;
//   const chatMessages = props.chatMessages;

//   //only show current channel messages
//   //sorted in reverse order by timestamp
//   const channelMessages = chatMessages
//     .filter((msgObj) => {
//       return msgObj.channel === currentChannel;
//     })
//     .sort((a, b) => b.timestamp - a.timestamp);

//   const messageItemArray = channelMessages.map((messageObj) => {
//     const element = (
//       <MessageItem
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return element;
//   })

//   const handleTestClick = (event) => {
//     console.log("testing...");

//     //add to database
//     const db = getDatabase();
//     const messageRef = ref(db, "message") //refers to the message key in the database
    
//     firebaseSet(messageRef, "You clicked me dude");

//     const profFirstNameRef = ref(db, "professor/firstName")
//     firebaseSet(profFirstNameRef, "Tim");

//     const profCourseRef = ref(db, "professor/courseNumber");
//     firebaseSet(profCourseRef, "INFO 340BSpring");

//     const profFirstNameLanguageRef = ref(db, "professor/firstName/language")
//     firebaseSet(profFirstNameLanguageRef, "English");

//     const atTheRootRef = ref(db,"offtheroot")
//     firebaseSet(atTheRootRef, "off the root");

//   }


//   if (channelMessages.length === 0) {
//     return <p>No messages on this channel yet!</p>
//   }

//   return (
//     <div className="scrollable-pane">
//       <div className="pt-2 my-2">
//         <Button className="justify-content-start" variant="warning" onClick={handleTestClick}> Test</Button>
//         <p> </p>
//         {messageItemArray}
//       </div>
//     </div>
//   )
// }

// function MessageItem(props) {
//   const { userName, userImg, text } = props.messageData;

//   //state
//   const [isLiked, setIsLiked] = useState(false);

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post!");
//     setIsLiked(!isLiked); //toggle
//   }

//   //RENDERING
//   let heartColor = "grey";
//   if (isLiked) {
//     heartColor = "red";
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <div className="me-2">
//         <img src={userImg} alt={userName + "'s avatar"} />
//       </div>
//       <div className="flex-grow-1">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// //Slide 31
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button'
// import { getDatabase, ref, set as firebaseSet} from 'firebase/database'; 

// export function ChatPane(props) {
//   const currentChannel = props.currentChannel;
//   const chatMessages = props.chatMessages;

//   //only show current channel messages
//   //sorted in reverse order by timestamp
//   const channelMessages = chatMessages
//     .filter((msgObj) => {
//       return msgObj.channel === currentChannel;
//     })
//     .sort((a, b) => b.timestamp - a.timestamp);

//   const messageItemArray = channelMessages.map((messageObj) => {
//     const element = (
//       <MessageItem
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return element;
//   })

//   const handleTestClick = (event) => {
//     console.log("testing...");

//     //add to database
//     const db = getDatabase();
//     const messageRef = ref(db, "message") //refers to the message key in the database
    
//     firebaseSet(messageRef, "You clicked me!");

//     const profFirstNameRef = ref(db, "professor/firstName")
//     firebaseSet(profFirstNameRef, "Timothy");

//     const profCourseRef = ref(db, "professor/courseNumber");
//     firebaseSet(profCourseRef, "INFO 340");


//   }


//   if (channelMessages.length === 0) {
//     return <p>No messages on this channel yet!</p>
//   }

//   return (
//     <div className="scrollable-pane">
//       <div className="pt-2 my-2">
//         <Button className="justify-content-start" variant="warning" onClick={handleTestClick}> Test</Button>
//         <p> </p>
//         {messageItemArray}
//       </div>
//     </div>
//   )
// }

// function MessageItem(props) {
//   const { userName, userImg, text, key, liked } = props.messageData;

//   //state
//   // const [isLiked, setIsLiked] = useState(false);

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post!");
//     const db = getDatabase();
//     const likeRef = ref(db, "allMessages/"+key+"/liked");
//     // setIsLiked(!isLiked); //toggle
//     // firebaseSet(likeRef, true)
//     firebaseSet(likeRef, !liked)
//   }

//   //RENDERING
//   let heartColor = "grey";
//   if (liked) {
//     heartColor = "red";
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <div className="me-2">
//         <img src={userImg} alt={userName + "'s avatar"} />
//       </div>
//       <div className="flex-grow-1">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }



