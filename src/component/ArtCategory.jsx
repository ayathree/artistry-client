import { useEffect, useState } from "react";


const ArtCategory = () => {

    const[categories, setCategories]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/artSub')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCategories(data)
           
        })
    },[])


    return (
        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {
                categories.map(category=><div key={category._id} className="card ">
                <figure className="relative" >
                  <img src={category.image} alt="" className=" rounded-xl h-[200px] w-[300px] border-2 border-[#eb9b40]" />
                  <h1 className="absolute top-auto bottom-4 font-bold text-xl text-white bg-[#eb9b40] p-1">{category.subcategory_name}</h1>
                </figure>
                
              </div>)
            }
            
        </div>
    );
};

export default ArtCategory;