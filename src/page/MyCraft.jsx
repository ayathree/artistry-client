import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MyCraft = () => {
    const{user}=useContext(AuthContext)
    const[items, setItems]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/arts/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItems(data)
        })
    },[user])
    return (
        
        <div>
            {
                items.map(item =><div key={item._id} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                  <img src={item.image} className="max-w-sm rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default MyCraft;