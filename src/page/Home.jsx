import { Link, useLoaderData } from "react-router-dom";
import ArtCategory from "../component/ArtCategory";


const Home = () => {
    const loadedData = useLoaderData();
    
    return (
       <div>
         <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5">
           {
            loadedData.slice(0,6).map(data=><div key={data._id} className="card  shadow-xl  border-2 border-[#eb9b40]">
                
  <figure className="px-5 pt-5">
    <img src={data.image}  alt="" className="rounded-xl h-[200px] w-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    

    <p>{data.short_description}</p>
    <div className="card-actions">
      <Link to={`/view/${data._id}`}><button className="btn bg-[#eb9b40]">View Details</button></Link>
    </div>
  </div>

            </div>)
           }
            
        </div>
        <hr className="mt-20 border-2 border-[#eb9b40]" />
        <div className="mt-20">
          <ArtCategory></ArtCategory>
        </div>
       </div>
    );
};

export default Home;