import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCraft = () => {
    const{user}=useContext(AuthContext)
    const[items, setItems]= useState([])
    const [uiDelete, setUiDelete]= useState(false)

    useEffect(()=>{
        fetch(`https://assignment-10-server-nu-ashen.vercel.app/arts/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItems(data)
        })
    },[user, uiDelete])

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
       
        fetch(`https://assignment-10-server-nu-ashen.vercel.app/deleteCraft/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.deletedCount>0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Item has been deleted.",
                    icon: "success"
                  });
                }
                setUiDelete(!uiDelete)
        })
    


    }
})
    }
    return (
        
        <div >
            {
                items.map(item =><div key={item._id} className="hero  p-20   ">
                <div className="hero-content flex-col lg:flex-row justify-center items-center gap-10 p-8 border-2 border-[#eb9b40]">
                  <img src={item.image} className=" rounded-lg shadow-2xl h-[300px] w-[400px]" />
                  <div>
                    <h1 className="text-5xl font-bold ">{item.item_name}</h1>
                    <div className="py-2 flex flex-row gap-3">
                        <p className="font-bold">Price:</p>
                    <p >{item.price}</p>
                    </div>
                   <div className="py-2 flex flex-row gap-3" >
                   <p className="font-bold">Rating:</p>
                   <p>{item.rating}</p>
                   </div>
                    <div className="py-2 flex flex-row gap-3" >
                    <p className="font-bold">Customization:</p>

                    <p>{item.customization}</p>
                    </div>
                    <div  className="py-2 flex flex-row gap-3" >
                    <p className="font-bold">StockStatus:</p>

                    <p>{item.stockStatus}</p>
                    </div>
                    <div className="flex flex-row gap-10">
                    <Link to={`/craftDe/${item._id}`}><button className="btn bg-[#eb9b40] text-black">Update</button></Link>
                    <button onClick={()=>handleDelete(item._id)} className="btn bg-[#eb9b40] text-black">Delete</button>
                    </div>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default MyCraft;