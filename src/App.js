
// import React from 'react';
// function App() {
//   return (
    //list
  //  <ol>
  //   <li>apple</li>
  //   <li>banana</li>
  //  </ol>



//   <table border="2"> 
//     <thead>
//         <tr>
//             <th>NAME</th>
//             <th>JOB</th>
//             <th>WORK EXPERIENCE</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr> 
    
//             <td>amar</td>
//             <td>software engineer</td>
//             <td>5 years</td>
//         </tr>

//         <tr> 
//             <td>anil</td>
//             <td>senior web developer</td>
//             <td>2 year</td>
//         </tr>

//         <tr> 
//             <td>john</td>
//             <td>junior tech writter</td>
//             <td>6 month</td>
//         </tr>
//     </tbody>
// </table>


/* <table>
<tr>
    <th>ID</th>
    <th>Class</th>
    <th>Name</th>
</tr>
<tr>
    <td>1</td>
    <td>B.Tech</td>
    <td>Anil</td>
</tr>
<tr>
    <td>2</td>
    <td>Degree</td>
    <td>Anu</td>
</tr>
 </table> */


// //buttons
// //  <button>search </button> 

// <button>login</button> 

//   );
// }
// export default App;


import { Component } from "react"
import ButtonComponent from "./components/button/button-component"
import ListComponent from "./components/list/list-component"
import UnOrder from "./components/list/unorder"
import TableComponent from "./components/table/table-component"
import FormComponent from "./components/form/form-component"





function App() {
    return (
      <div>
        <h3>app.js</h3>
        <ButtonComponent/>
        <ListComponent></ListComponent>
        <ListComponent></ListComponent>
        <UnOrder></UnOrder>
        <UnOrder></UnOrder>
        <TableComponent></TableComponent>
        <FormComponent></FormComponent>

      



      </div>

    )
  }
  export default App