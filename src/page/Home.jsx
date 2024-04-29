import { Link, useLoaderData } from "react-router-dom";
import ArtCategory from "../component/ArtCategory";
import { Zoom } from "react-awesome-reveal";
import { useEffect, useState } from "react";


const Home = () => {
    const loadedData = useLoaderData();
    const [isLoading, setIsLoading]= useState([]);

    useEffect(()=>{
      setIsLoading(true)
      fetch('https://assignment-10-server-nu-ashen.vercel.app/arts')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setIsLoading(false)
      })

    },[])
    
    return (
       <div>
       <div className="flex flex-row justify-center items-center">
       {
          isLoading? <span className="loading loading-spinner loading-lg "></span>:null
        }
       </div>
        <Zoom>
        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5">
           {
            loadedData.slice(0,6).map(data=><div key={data._id} className="card  shadow-xl  border-2 border-[#eb9b40]">
                
  <figure className="px-5 pt-5">
    <img src={data.image}  alt="" className="rounded-xl h-[200px] w-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    

    <p>{data.short_description}</p>
    <div className="card-actions">
      <Link to={`/view/${data._id}`}><button className="btn bg-[#eb9b40] text-black">View Details</button></Link>
    </div>
  </div>

            </div>)
           }
            
        </div>
        </Zoom>
        <hr className="mt-20 border-2 border-[#eb9b40]" />
        <div className="mt-20">
          
         <Zoom><ArtCategory></ArtCategory></Zoom>
        </div>
       </div>
    );
};

export default Home;