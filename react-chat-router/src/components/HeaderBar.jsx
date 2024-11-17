import React from 'react';

export function HeaderBar(props) {
  const currentUser = props.currentUser;

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>

      <nav>
        {/* links go here */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/chat">Chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signin">
              <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
            </a>
          </li>
        </ul>
      </nav>

    </header>
  )
}

// // Slide 21 Example changing to 'Link' with 'to' rather than 'a' with 'href'

// import React from 'react';
// import {Link } from 'react-router-dom';

// export function HeaderBar(props) {
//   const currentUser = props.currentUser;

//   return (
//     <header className="text-light bg-primary px-1 d-flex justify-content-between">
//       <h1>React Chat</h1>

//       <nav>
//         {/* links go here */}
//         <ul className="nav nav-pills">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/chat">Chat</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">About</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/signin">
//               <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
//             </Link>
//           </li>
//         </ul>
//       </nav>

//     </header>
//   )
// }

// // Slide 25 Example adding nested route - update links 

// import React from 'react';
// import {Link } from 'react-router-dom';

// export function HeaderBar(props) {
//   const currentUser = props.currentUser;

//   return (
//     <header className="text-light bg-primary px-1 d-flex justify-content-between">
//       <h1>React Chat</h1>

//       <nav>
//         {/* links go here */}
//         <ul className="nav nav-pills">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/app/chat">Chat</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/app/about">About</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/app/signin">
//               <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
//             </Link>
//           </li>
//         </ul>
//       </nav>

//     </header>
//   )
// }

//  // Slide 27 (and 29) Returning the links to not have the extra 'app' in front of the path

// import React from 'react';
// import {Link } from 'react-router-dom';

// export function HeaderBar(props) {
//   const currentUser = props.currentUser;

//   return (
//     <header className="text-light bg-primary px-1 d-flex justify-content-between">
//       <h1>React Chat</h1>

//       <nav>
//         {/* links go here */}
//         <ul className="nav nav-pills">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/chat">Chat</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">About</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/signin">
//               <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
//             </Link>
//           </li>
//         </ul>
//       </nav>

//     </header>
//   )
// }