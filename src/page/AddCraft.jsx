import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AddCraft = () => {
    const {user}= useContext(AuthContext)

    const handleAdd =e=>{
        e.preventDefault();
        const form = e.target;
        const item_name = form.itemName.value;
        const subcategory_name =form.subName.value;
        const rating =form.rating.value;
        const short_description=form.shortDes.value;
        const price=form.price.value;
        const customization=form.cust.value;
        const processing_time=form.process.value;
        const stockStatus =form.status.value;
        const email =form.email.value;
        const name = form.name.value;
        const image = form.photoUrl.value;
        const newAdd = {item_name, subcategory_name, rating,short_description,price,customization,processing_time,stockStatus,email,name,image}
        console.log(newAdd)
    }
    return (
        <div>
            <div className="">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card shrink-0 w-full shadow-2xl bg-base-100 border-2 border-[#eb9b40]">
      <form onSubmit={handleAdd} className="card-body">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* 1 */}
            <div>
            <div className="form-control">
            
            <label className="label">
              <span className="label-text font-semibold">Item_Name</span>
            </label>
            <input type="text" placeholder="Item_name" name="itemName" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Subcategory_Name</span>
            </label>
            <input type="text" placeholder="subcategory_name" name="subName" className="input input-bordered" required />
           
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
           
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Short Description</span>
            </label>
            <input type="text" placeholder="short description" name="shortDes" className="input input-bordered" required />
           
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input type="text" placeholder="price" name="price" className="input input-bordered" required />
           
            </div>
            </div>
            {/* 2 */}
            <div>
            <div className="form-control">
            
            <label className="label">
              <span className="label-text font-semibold ">Customization</span>
            </label>
            <input type="text" placeholder="customization" name="cust" className="input input-bordered" required />
          </div>
          <div className="form-control">
            
            <label className="label">
              <span className="label-text font-semibold">Processing_time
</span>
            </label>
            <input type="text" placeholder="processing_time" name="process" className="input input-bordered" required />
          </div>
          <div className="form-control">
            
            <label className="label">
              <span className="label-text font-semibold">StockStatus</span>
            </label>
            <input type="text" placeholder="StockStatus" name="status" className="input input-bordered" required />
          </div>
          <div className="form-control">
            
            <label className="label">
              <span className="label-text font-semibold">User Email</span>
            </label>
            <input type="email" placeholder="email" name="email" defaultValue={user.email} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">User Name</span>
            </label>
            <input type="text" placeholder="name" name="name" defaultValue={user.displayName} className="input input-bordered" required />
           
            </div>

            </div>
        </div>
        <div className="form-control">
            
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="text" placeholder="photoUrl" name="photoUrl" className="input input-bordered" required />
          </div>
        
        <div className="form-control mt-6">
          <button className="btn bg-[#eb9b40]">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddCraft;