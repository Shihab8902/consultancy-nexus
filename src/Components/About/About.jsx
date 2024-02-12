import about from '../../assets/images/about.jpg';
import { TfiHandPointRight } from "react-icons/tfi";


const About = () => {
    return <div className="container mx-auto px-5 my-20">
        {/* Heading */}
        <div>
            <h3 className="text-center text-2xl md:text-4xl uppercase font-semibold">About <span className=" text-[#808080]">FounderX</span></h3>
            <p className="lg:w-1/2 mx-auto text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum rem, magni temporibus corporis dignissimos qui earum nobis! Amet, enim a.</p>
        </div>

        {/* Main content */}
        <div className='flex items-center gap-10 flex-col lg:flex-row'>
            {/* aside image */}
            <div className='flex-1'>
                <img src={about} alt="about" />
            </div>

            {/* About text */}
            <div className='flex-1 md:bg-gray-200 rounded-xl '>
                <ul className=' p-2 md:p-10 list-disc' >
                    <li className=' mb-5 font-medium'> Lorem ipsum dolor sit adipisicing elit magni temporibus corporis. </li>
                    <li className=' mb-5  font-medium'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    <li className=' mb-5  font-medium'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    <li className=' mb-5  font-medium'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
                    <li className=' mb-5 font-medium'> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </li>


                </ul>


            </div>

        </div>



    </div >
}

export default About