import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// // Example 1
// //JSX - element to show
// const msgElem = <h1 id="hello" className="myclass">Hello React</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(msgElem);

// // Example 2
// const content = (
//     <>
//         <h1>Hello world!</h1>
//         <p>This is a fine demo</p>
//     </>
// )
//     ;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// // Example 3
// const content = (

//     <div>
//         <header>
//             <h1>Hello world!</h1>
//         </header>
//         <main>
//             <p>This is the main section</p>
//         </main>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// // Example 4 - inline examples

// const myTitle = "Hello Inline React";
// const imgURL = './img/puppy.jpg';

// const content = (

//     <div>
//         <header>
//             <h1>{myTitle.toUpperCase()}</h1>
//         </header>
//         <main>
//             <p>This is the main section</p>
//             <p> A leap year has {(365 + 1) * 24 * 60} minutes!</p>
//             <img src={imgURL} alt="a cute puppy"></img>

//         </main>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// // Example 5
// function HelloMessage(props) {
    

//     let message = "Hello Early Risers!";
//     return <h1>{message}</h1>;

// }

// const content = <HelloMessage />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// //Example 6 - Make a headerComponent

// function HeaderComponent(props) {

//     //this is a comment
//     return (
//         <div>
//             {/* this is a comment */}
//             <header>
//                 <h1>React cool Header</h1>
//             </header>
//         </div>);
// }

// function HelloMessage(props) {
//     return <li>Hello World!</li>;
// }

// function GoodbyeMessage(props) {
//     return <li>See ya later!</li>;
// }

// function MessageList(props) {
//     return (
//         <div>
//             <ul>
//                 <HelloMessage /> {/* A HelloMessage component */}
//                 <GoodbyeMessage /> {/* A GoodbyeMessage component */}
//             </ul>
//         </div>
//     );
// }

// const content =
//     <>
//         <HeaderComponent />
//         <MessageList />
//     </>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content)

// // Example 7

import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

