import { useState } from "react";
import {  Link, useLoaderData } from "react-router-dom";

import { Slide } from "react-awesome-reveal";



const AllArt = () => {
    const loadedData = useLoaderData();
    const [allItems]= useState(loadedData)
    return (
       <Slide>
         <div>
         <div className="lg:overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="lg:text-xl text-[#eb9b40]">
        
        <th>Item Name</th>
        <th>Subcategory Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      allItems.map(item=> <tr key={item._id} className="hover">
        
        <td>{item.item_name}</td>
        <td>{item.subcategory_name}</td>
        <td>{item.price}</td>
        <td><Link to={`/view/${item._id}`}><button className="btn bg-[#eb9b40]  text-black ">View Details</button></Link></td>
      </tr>)
     }
      
    </tbody>
  </table>
</div>
            
           
           
            
             
            
         </div>
       </Slide>
    );
};

export default AllArt;