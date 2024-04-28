import { Link, useLoaderData } from "react-router-dom";


const SubCategory = () => {
    const items = useLoaderData();
    console.log(items)
    
    return (
        <div >
        {
            items.map(item =><div key={item._id} className="hero  p-20   ">
            <div className="hero-content flex-col lg:flex-row justify-center items-center gap-10 p-8  border-2 border-[#eb9b40]">
              <img src={item.image} className=" rounded-lg shadow-2xl h-[300px] w-[400px]" />
              <div>
                <h1 className="text-5xl font-bold ">{item.item_name}</h1>
                <div className="py-2 flex flex-row gap-3">
                    <p className="font-bold">Category:</p>
                <p >{item.subcategory_name}</p>
                </div>
               <div className="py-2 flex flex-row gap-3" >
               <p className="font-bold">Rating:</p>
               <p>{item.rating}</p>
               </div>
                <div className="py-2 flex flex-row gap-3" >
                <p className="font-bold">Price:</p>

                <p>{item.price}</p>
                </div>
                <div  className="py-2 flex flex-row gap-3" >
                <p className="font-bold">Processing Time:</p>

                <p>{item.processing_time}</p>
                </div>
                <div  className="py-2 flex flex-row gap-3" >
                <p className="font-bold">Short Description:</p>

                <p>{item.short_description}</p>
                </div>
               
                <Link to={`/view/${item._id}`}><button className="btn bg-[#eb9b40]">View Details</button></Link>
               
                
              </div>
            </div>
          </div>)
        }
    </div>
    );
};

export default SubCategory;