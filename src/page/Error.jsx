import Lottie from 'lottie-react';
import aniThree from '../assets/Animation - 1714318909972.json'
import { Link } from 'react-router-dom';

const Error = () => {
    const style = {
        width: "300px"
    }
    return (
        <div >
            <div className='flex flex-row justify-center items-center'>
            <Lottie style={style} animationData={aniThree}></Lottie>
            </div>
            <h1 className='text-center text-[#eb9b40] text-2xl font-bold'>Page Not Found</h1>
            <div className=' flex flex-row justify-center items-center mt-7'>

            <Link to={'/'}><button className='btn bg-[#eb9b40]'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Error;