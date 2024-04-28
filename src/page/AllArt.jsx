import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
import ArtCard from "../component/ArtCard";
import { Slide } from "react-awesome-reveal";



const AllArt = () => {
    const loadedData = useLoaderData();
    const [allItems, setAllItems]= useState(loadedData)
    return (
       <Slide>
         <div>
            
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                 {
                     allItems.map(allItem=> <ArtCard key={allItem._id} allItem={allItem} setAllItems={setAllItems}  >
                   </ArtCard>)
                 }
 
             </div>
            
             
            
         </div>
       </Slide>
    );
};

export default AllArt;