import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    const {id}= useParams();
    const[views, setViews]= useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/craftDetails/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setViews(data)
        })

    },[id])
    return (
        <div>
           <div className="hero min-h-screen   border-2 border-[#eb9b40]">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <img src={views.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{views.item_name}</h1>
      <div className="flex flex-row gap-3 mt-4">
        <p className="font-semibold  ">Subcategory Name:</p>
      <p>{views.subcategory_name}</p>
      </div>
      <div className="flex flex-row gap-3 mt-4">
      <p className="font-semibold  ">Customization:</p>
      <p>{views.customization}</p>
      </div>
      <div  className="flex flex-row gap-3 mt-4">
        <p  className="font-semibold  ">Price</p>
      <p>{views.price}</p>
      </div>
     <div  className="flex flex-row gap-3 mt-4">
     <p  className="font-semibold  ">Processing Time</p>

     <p>{views.processing_time}</p>
     </div>
      <div  className="flex flex-row gap-3 mt-4" >
      <p  className="font-semibold  ">Ratings:</p>

      <p>{views.rating}</p>
      </div>
      <div  className="flex flex-row gap-3 mt-4" >
      <p  className="font-semibold  ">Stock Status:</p>

      <p>{views.stockStatus}</p>
      </div>
      <div  className="flex flex-row gap-3 mt-4" >
      <p  className="font-semibold  ">Short Description:</p>

      <p >{views.short_description}</p>
      </div>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default ViewDetails;