import { Link, useLoaderData } from "react-router-dom";
import ArtCategory from "../component/ArtCategory";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import Slider from "../component/Slider";
import vanImg from '../assets/van.jpg';
import vinci from '../assets/vinci.jpg';
import vanGogh from '../assets/van_2.jpg';
import vinciTwo from '../assets/portrait-of-leonardo.jpg'


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
       <div >
        <Slider></Slider>
       </div>
       <hr className="mt-20 border-2 border-[#eb9b40]" />
       <p className="text-center font-bold lg:text-6xl text-3xl text-[#eb9b40] m-10">The Beautiful Paintings</p>
       
        <Slide>
        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
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
        </Slide>
        <hr className="mt-20 border-2 border-[#eb9b40]" />
        <p className="text-center font-bold text-6xl text-[#eb9b40] m-10">The Art</p>
       <Fade>
       <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={vanImg} className="rounded-lg shadow-2xl h-[250px] w-[300px]" />
    <div>
      <h1 className="text-3xl font-bold ">Starry Night Over the Rhône</h1>
      <p className="py-6">Starry Night Over the Rhône (1888) is the sister work of Starry Night (1889). While Starry Night was painted from Van Gogh’s hospital room, this lesser-known midnight depiction was actually painted on the bank of the Rhône river, which was just a short walk from his home in Arles</p>

    </div>
  </div>
</div>
<div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={vinci} className=" rounded-lg shadow-2xl h-[250px] w-[300px]" />
    <div>
      <h1 className="text-3xl font-bold">The Mona Lisa</h1>
      <p className="py-6">Mona Lisa, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.</p>

    </div>
  </div>
</div>

        </div>
       </Fade>
        <hr className="mt-20 border-2 border-[#eb9b40]" />
        <p className="text-center font-bold text-6xl text-[#eb9b40] m-10">The Artist</p>
        <Fade>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={vanGogh} className="rounded-lg shadow-2xl h-[250px] w-[300px]" />
    <div>
      <h1 className="text-3xl font-bold">Vincent van Gogh</h1>
      <p className="py-6">Vincent Willem van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade, he created approximately 2100 artworks, including around 860 oil paintings, most of them in the last two years of his life</p>

    </div>
  </div>
</div>
<div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={vinciTwo} className=" rounded-lg shadow-2xl h-[250px] w-[300px]" />
    <div>
      <h1 className="text-3xl font-bold">Leonardo da vinci</h1>
      <p className="py-6">Although he is best known for his dramatic and expressive artwork, Leonardo also conducted dozens of carefully thought out experiments and created futuristic inventions that were groundbreaking for the time. His keen eye and quick mind led him to make important scientific discoveries, yet he never published his ideas.</p>

    </div>
  </div>
</div>

        </div>
        </Fade>


        <hr className="mt-20 border-2 border-[#eb9b40]" />
        <p className="text-center font-bold lg:text-6xl text-3xl text-[#eb9b40] m-10">Art Categories</p>

        <div className="mt-20">
          
         <Zoom><ArtCategory></ArtCategory></Zoom>
        </div>
       </div>
    );
};

export default Home;