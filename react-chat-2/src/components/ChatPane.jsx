import React from 'react';

import { ComposeForm } from './ComposeForm.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {
  console.log("rendering the ChatPane")

  //data: an array of message objects [{}, {}]
  const messageObjArray = INITIAL_CHAT_LOG
    .sort((m1, m2) => m1.timestamp - m2.timestamp); //chron order

  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = messageObjArray.map((chatObj) => {
      const elem = <MessageItem key={chatObj.timestamp} messageData={chatObj} />
      return elem; //put it in the new array!
  });

  return (
    <>
      <div className="scrollable-pane">
        {/* button demo */}
        <div className="pt-2 my-2">
          <button className="btn btn-success">Click me!</button>
          <p>You clicked me X times</p>
        </div>
        <hr/>

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm />
    </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button">
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
