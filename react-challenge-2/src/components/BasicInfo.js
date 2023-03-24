// ////Medium:

// import React from 'react'


// export default class BasicInfo extends React.Component {
//   constructor(props){ 
//     super(props) 
        
  
//     this.state = {
//       person : [{
//       name: {},
//       age:{},
//       number: {},
//       dob: {}
//     }],
//     } 
//   }
// //// //*state is defined as an object where we define key-value pairs specifying various data we want to track in the application

// render() {
//   return (
//     <div>
//       <ul>
//         <li>Name: {this.props.name}</li>
//         <li>Age: {this.props.age}</li>
//         <li>Number: {this.props.number}</li>
//         <li>DOB: {this.props.dob}</li>
//       </ul>
//     </div>
//   )
// }
// }
// // //this component (BasicInfo.js) is considered the child component of App.js
// // //This component uses the class component which contains our 'person' property with our empty object
// // //object is "empty" so that it can be defined later in our parent component when it is passed in as props





// //Hard:

import React from 'react'
import './BasicInfo.css'
//imported css to style the list of objects 


export default class BasicInfo extends React.Component {
  constructor(props){ 
    super(props) 
        
    this.state = {
      person : [{
      name: "HSamoen",
      age:'23',
      number: "(704)000-0000",
      dob: "10/25/1999"
    }, {
      name: "Dylan",
      age:'12',
      number: "(704)000-0000",
      dob: "00/00/0000"
    },
    {
      name: "Justin",
      age:'14',
      number: "(704)000-0000",
      dob: "00/00/0000"
    },
  ]} 
  }
//person property with an array of objects and their key-value pairs

render() {
  return (
    <div className='BasicInfo'>
     {this.state.person.map(person => (
          <div className='BasicInfo-Info'>
          <ul>
            <li>Name: {person.name}</li>
            <li>Age: {person.age}</li>
            <li>Number: {person.number}</li>
            <li>DOB: {person.dob}</li>
          </ul>
         </div>
        ))}
    </div>
  )
}
}

//.map() is a higher-order array function that allows you to iterate through an array
//array of objects will be passed to the parent component to be rendered
 