// //VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. 
// //This div should be hard-coded to prepare for the Medium Challenge.


// import React from 'react'

// // //Solution #1: rendering the basic information in div without the use of constructor() 
// // to use class compnent: export default class App extends React.Component
// // the syntax contains shortcut to exporting the class component and extension to use the class component without having to define it when importing 'react'


// export default class App extends React.Component {
// render() {
//   return (
//     <div>
//       <ul>
//         <li>Name: HSamoen</li>
//         <li>Age: 23</li>
//         <li>Number: (704)000-0000</li>
//         <li>DOB: 10/25/1999</li>
//       </ul>
//     </div>
//   )
// }
// }
// // //renders the hard coded info in a class component without the use of constructor()





// // // //EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. 
// // // //Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

// // import React from 'react'

// // export default class App extends React.Component {
// // constructor(props) {
// //   super(props)
// // // // //super() is a method that allows us to use this.state in the constructor()
// // // // //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods

// //   this.state = {
// //           person : {}
// //         } 
// //       }
// // // // //this.state is set to have a property named 'person' which is then set to an empty object

// // render() {
// //   return (
// //     <div>
// //       <h1>{this.state.person}</h1>
// //     </div>
// //   )
// // }
// // }
// // //To render any object defined in this.state, we use this.state with the property name
// // //*returns an empty object




// // //MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  
// // //Then take the returned ‘div’ and create a component, pass state into it, and import it as ‘BasicInfo’. (This challenge should not change the look of the page) 


// import React from 'react'
// import BasicInfo from './components/BasicInfo'
// ////to use props, the component must be imported in

// export default class App extends React.Component {
//   render() {
//     return (
//       <BasicInfo name="HSamoen" age="23" number="(704)421-0849" dob="10/25/1999" />
//     )
//   }
// }
// // //props can be passed from one component to another:
// //// To do so, call in props from child component (BasicInfo.js) to the parent component (App.js)
// // //to use props in the parent component, the class component was referenced in the return statement with the following: <BasicInfo />
// // //with the use of props, objects can be defined in the parent component as shown above
// ////*the parent component renders an unordered list with the info that we passed in 





//Hard: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)
import React from 'react'
import BasicInfo from './components/BasicInfo'
//imported the BasicInfo child component

export default class App extends React.Component {
  render() {
    return (
      <BasicInfo />
    )
  }
}
////referenced the BasicInfo child class component to render the array of objects 