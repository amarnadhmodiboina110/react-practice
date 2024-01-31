




export const TodoList =()=>{

    const details={
      name:"beautiful nature",
      imageURL:"https://th.bing.com/th/id/OIP.Z_PIeIRDajXPmZHROt-T_QHaEK?rs=1&pid=ImgDetMain",
      imageALT:"Environment",
      listItems:["Invent new traffic lights","Rehearse a movie scene","Improve the spectrum technology","Heaven is under our feet as well as over our heads"," I believe in God, only I spell it Nature"]
  
    }
  //   destructure: unpacking values from array or object into distinct variable
  const {name,imageURL,imageALT:alternateText,listItems}=details
      return(
          <div>
               <h1>{name}</h1>
      <img 
        src={imageURL}
        alt={alternateText}
        className="photo"
      />
      <ul>
        <li>{listItems[0]}</li>
        <li>{listItems[1]}</li>
        <li>{listItems[2]}</li>
        <li>{listItems[3]}</li>
        <li>{listItems[4]}</li>

      </ul>
      <button  onClick={()=>{alert("Hi there.....welcome")}}   >Click me</button>
         </div>
      )
  }
  
  
  // class is the predefined keyword in class based component in react so 
  // className instead of class