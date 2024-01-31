

import ProfileCard from "./card"

const MapMethod =()=>{


    const members=[
        {
            name:"amar",
            id:1,
            designation:"Multi task/CEO",
            color:"red",
            salary:"100k"
        },
        {
            name:"Anil",
            designation:"All rounder" ,
            id:2,
            color:"green",
            salary:"60k"

        },{
            name:"sai",
            designation:"Teacher",
            color:"yellow",
            salary:"160k",
            id:3

        }
    

    ]




    return(


        <>
        {members.map((details)=><ProfileCard profile={details} key={details.id} />)}
      
        </>

    )
}

export default MapMethod
