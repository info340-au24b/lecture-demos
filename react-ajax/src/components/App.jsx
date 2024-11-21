// import React, { useState } from 'react';

// //example GitHub repo data
// const EXAMPLE_DATA = [
//   { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
//   { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
//   { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" }
// ];


// function App(props) {
//   const [stateData, setStateData] = useState(EXAMPLE_DATA);
//   //control form
//   const [queryInput, setQueryInput] = useState('');

//   const handleChange = (event) => {
//     setQueryInput(event.target.value);
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("submitting form");

//     //do something with form input!

//   }


//   //render the data
//   const dataElemArray = stateData.map((repo) => {
//     return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
//   })

//   console.log("rendering content");

//   return (
//     <div className="container">
//       <header><h1>AJAX Demo</h1></header> 

//       <form method="GET" action="https://api.github.com/search/repositories">
//         <input type="text" className="form-control mb-2" 
//           name="q"
//           placeholder="Search Github for..."
//           value={queryInput} onChange={handleChange}
//         />
//         <input type="hidden" name="sort" value="stars" />
//         <button type="submit" className="btn btn-primary">Search!</button>
//       </form>

//       <div className="mt-4">
//         <h2>Results</h2>
//         {/* results go here */}
//         {dataElemArray}
//       </div>
//     </div>
//   )
// }

// export default App;

// //Slide 29

// import React, { useState, useEffect } from 'react';

// //example GitHub repo data
// const EXAMPLE_DATA = [
//   { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
//   { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },
//   { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
// ];


// function App(props) {
//   const [stateData, setStateData] = useState(EXAMPLE_DATA);
//   //control form
//   const [queryInput, setQueryInput] = useState('');

//   const handleChange = (event) => {
//     setQueryInput(event.target.value);
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     //do something with form input!
//     // const URL = "https://api.github.com/search/repositories?q+"+queryInput+"react&sort=stars";
//     const URL = "https://api.github.com/search/repositories?q="+queryInput+"&sort=stars";

//     fetch(URL)
//       .then(function (response) {
//         const dataPromise = response.json()
//         return dataPromise;
//       })
//       .then(function (data) {
//         console.log("data from within handleSubmit", data);
//       })

//   }


//   //render the data
//   const dataElemArray = stateData.map((repo) => {
//     return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
//   })

//   console.log("rendering content");

//   return (
//     <div className="container">
//       <header><h1>AJAX Demo</h1></header>

//       <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
//         <input type="text" className="form-control mb-2"
//           name="q"
//           placeholder="Search Github for..."
//           value={queryInput} onChange={handleChange}
//         />
//         <input type="hidden" name="sort" value="stars" />
//         <button type="submit" className="btn btn-primary">Search!</button>
//       </form>

//       <div className="mt-4">
//         <h2>Results</h2>
//         {/* results go here */}
//         {dataElemArray}
//       </div>
//     </div>
//   )
// }

// export default App;

// //Slide 30
// import React, { useState, useEffect } from 'react';

// //example GitHub repo data
// const EXAMPLE_DATA = [
//   { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
//   { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },
//   { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
// ];


// function App(props) {
//   const [stateData, setStateData] = useState([]);
//   //control form
//   const [queryInput, setQueryInput] = useState('');

//   const handleChange = (event) => {
//     setQueryInput(event.target.value);
//   }

//    const handleSubmit = async (event) => {
//     event.preventDefault();

//     //do something with form input!
//     // const URL = "https://api.github.com/search/repositories?q+"+queryInput+"react&sort=stars";
//     const URL = "https://api.github.com/search/repositories?q="+queryInput+"&sort=stars";

//     fetch(URL)
//       .then(function (response) {
//         const dataPromise = response.json()
//         return dataPromise;
//       })
//       .then(function (data) {
//         console.log("data", data);
//         setStateData(data);
//         // setStateData(data.items);
//       })
//   }


//   //render the data
//   const dataElemArray = stateData.map((repo) => {
//     return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
//   })

//   console.log("rendering content");

//   return (
//     <div className="container">
//       <header><h1>AJAX Demo</h1></header>

//       <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
//         <input type="text" className="form-control mb-2"
//           name="q"
//           placeholder="Search Github for..."
//           value={queryInput} onChange={handleChange}
//         />
//         <input type="hidden" name="sort" value="stars" />
//         <button type="submit" className="btn btn-primary">Search!</button>
//       </form>

//       <div className="mt-4">
//         <h2>Results</h2>
//         {/* results go here */}
//         {dataElemArray}
//       </div>
//     </div>
//   )
// }

// export default App;

// //Slide 31
// import React, { useState, useEffect } from 'react';

// //example GitHub repo data
// const EXAMPLE_DATA = [
//   { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
//   { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },
//   { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
// ];


// function App(props) {
//   const [stateData, setStateData] = useState([]);
//   //control form
//   const [queryInput, setQueryInput] = useState('');

//   useEffect(() => {
//     fetch('data.json')
//     .then(function (response) {
//       const dataPromise = response.json()
//       return dataPromise;
//     })
//     .then(function (data) {
//       console.log("data", data);
//       setStateData(data);
//     })
//     }, [])
  
 
//   const handleChange = (event) => {
//     setQueryInput(event.target.value);
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     //do something with form input!
//     // const URL = "https://api.github.com/search/repositories?q+"+queryInput+"&sort=stars";
//     const URL = "https://api.github.com/search/repositories?q=" + queryInput + "&sort=stars";

//     fetch(URL)
//       .then(function (response) {
//         const dataPromise = response.json()
//         return dataPromise;
//       })
//       .then(function (data) {
//         console.log("data", data);
//         setStateData(data.items);
//       })
//   }


//   //render the data
//   const dataElemArray = stateData.map((repo) => {
//     return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
//   })

//   console.log("rendering content");

//   return (
//     <div className="container">
//       <header><h1>AJAX Demo</h1></header>

//       <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
//         <input type="text" className="form-control mb-2"
//           name="q"
//           placeholder="Search Github for..."
//           value={queryInput} onChange={handleChange}
//         />
//         <input type="hidden" name="sort" value="stars" />
//         <button type="submit" className="btn btn-primary">Search!</button>
//       </form>

//       <div className="mt-4">
//         <h2>Results</h2>
//         {/* results go here */}
//         {dataElemArray}
//       </div>
//     </div>
//   )
// }

// export default App;

//Slide 32 - example with catch block
import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
];


function App(props) {
  const [stateData, setStateData] = useState([]);
  //control form
  const [queryInput, setQueryInput] = useState('');

  
  useEffect(() => {
    fetch('data.json')
    .then(function (response) {
      const dataPromise = response.json()
      return dataPromise;
    })
    .then(function (data) {
      console.log("data", data);
      setStateData(data);
    })
 
  }, [])

     
    // fetch('data.json')
    // .then(function (response) {
    //   const dataPromise = response.json()
    //   return dataPromise;
    // })
    // .then(function (data) {
    //   console.log("data", data);
    //   setStateData(data);
    // })
 
  

 
  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    //do something with form input!
    const URL = "https://api.github.com/search/repositories?q=" + queryInput + "&sort=stars";
    //  const URL = "ata.json";

    
    // fetch(URL)
    //   .then(function (response) {
    //     const dataPromise = response.json()
    //     return dataPromise;
    //   })
    //   .then(function (data) {
    //     console.log("data", data);
    //     setStateData(data.items);
    //   })
    //   .catch((error) => {
    //     console.log("In the catch block: ", error)
    //   })

      fetch(URL)
      .then(function (response) {
        const dataPromise = response.json()
        return dataPromise;
      })
      .then(function (data) {
        console.log("data", data);
        setStateData(data.items);
      })
      .catch((error) => {
        console.log("In the catch block: ", error)
      })
      .then(() => {
        console.log("in the finally then block:")
      })
  
}

  //render the data
  const dataElemArray = stateData.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
  })

  console.log("rendering content");

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header>

      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2"
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="stars" />
        <button type="submit" className="btn btn-primary">Search!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}
      </div>
    </div>
  )
}

export default App;

// //d3 CSV example
// // 1) npm install d3
// // 2) then import d3 in the file

// import React, { useState, useEffect } from 'react';
// import * as d3 from 'd3'

// //example GitHub repo data
// const EXAMPLE_DATA = [
//     { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
//     { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },
//     { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
// ];


// function App(props) {
//     const [stateData, setStateData] = useState([]);
//     //control form
//     const [queryInput, setQueryInput] = useState('');

//     // here's the example using d3.csv

//     useEffect(() => {
//         d3.csv("data.csv")
//             .then(function (data) {
//               setStateData(data);
//                 console.log(data);
//             });
//     }, [])

//     const handleChange = (event) => {
//         setQueryInput(event.target.value);
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         //do something with form input!
//         const URL = "https://api.github.com/search/repositories?q=" + queryInput + "&sort=stars";
//         // const URL = "ata.json";


//         fetch(URL)
//             .then(function (response) {
//                 const dataPromise = response.json()
//                 return dataPromise;
//             })
//             .then(function (data) {
//                 console.log("data", data);
//                 setStateData(data.items);
//             })
//             .catch((error) => {
//                 console.log("In the catch block: ", error)
//             })

//     }



//     //render the data
//     const dataElemArray = stateData.map((repo) => {
//         return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
//     })

//     console.log("rendering content");

//     return (
//         <div className="container">
//             <header><h1>AJAX Demo</h1></header>

//             <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
//                 <input type="text" className="form-control mb-2"
//                     name="q"
//                     placeholder="Search Github for..."
//                     value={queryInput} onChange={handleChange}
//                 />
//                 <input type="hidden" name="sort" value="stars" />
//                 <button type="submit" className="btn btn-primary">Search!</button>
//             </form>

//             <div className="mt-4">
//                 <h2>Results</h2>
//                 {/* results go here */}
//                 {dataElemArray}
//             </div>
//         </div>
//     )
// }

// export default App;
