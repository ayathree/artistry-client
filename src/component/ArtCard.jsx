import { Link } from "react-router-dom";


const ArtCard = ({allItem}) => {
    const{_id, image, item_name, subcategory_name,short_description}= allItem
    return (
        
           <div className="card  shadow-xl  border-2 border-[#eb9b40]">
  <figure className="px-5 pt-5">
    <img src={image} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold text-2xl">{item_name}</h2>
    <h2 className="card-title text-xl">{subcategory_name}</h2>

    <p>{short_description}</p>
    <div className="card-actions">
      <Link to={`/view/${_id}`}><button className="btn bg-[#eb9b40]">View Details</button></Link>
    </div>
  </div>
</div> 
        
    );
};

export default ArtCard;