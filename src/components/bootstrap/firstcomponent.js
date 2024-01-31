








import ProfileCard, { ProfileCard1 } from "./card"
const BootstrapLayout =()=>{

    const members=[
        {
            name:"amar",
            designation:"Multi task/CEO",
            color:"red",
            salary:"100k"
        },
        {
            name:"Anil",
            designation:"All rounder" ,
            color:"green",
            salary:"60k"

        },{
            name:"sai",
            designation:"Teacher",
            color:"yellow",
            salary:"160k"

        }

    ]
    return(
        <>
   
        <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>Wellcome to react application</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
        <ProfileCard  profile={members[0]} />

        {/* <ProfileCard1 profile={members[0]} /> */}
        
     
    </div>
    <div className="col-sm-4">
        <ProfileCard profile={members[1]}  />
     
    </div>
    <div className="col-sm-4">
    <ProfileCard profile={members[2]}  />
    
    </div>
  </div>
</div>
</>
    )
}

export default BootstrapLayout