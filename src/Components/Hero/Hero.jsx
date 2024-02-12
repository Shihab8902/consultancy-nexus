import bg from '../../assets/images/hero.jpg';
import person from '../../assets/images/person.png';
import Logo from '../Logo/Logo';
import { MdOutlineDateRange } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";

const Hero = () => {
    return (
        <div className='relative min-h-screen'>
            {/* Background image */}
            <div className='absolute inset-0 bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }} />

            {/* Dark overlay covering the entire viewport */}
            <div className='absolute inset-0 bg-black bg-opacity-40'></div>

            {/* Inner content */}
            <div className='relative z-10'>
                <div className='container mx-auto p-5'>
                    {/* Logo */}
                    <Logo />

                    {/* Main content */}
                    <div className='flex gap-6 flex-col-reverse lg:flex-row'>
                        <div className='flex-1 text-white mt-12'>
                            <h3 className='text-4xl font-semibold leading-normal'>Embark on a Consultative Journey: Uncover Innovative Problem-Solving!</h3>
                            <p className='mt-5'>Learn the proven approach used by top strategy consultants to tackle complex business challenges effectively. Solve an MBB case study LIVE with Darsheel to understand the concepts hands-on.</p>

                            {/* Perks */}
                            <div className='flex justify-between mt-8'>
                                <div className='flex justify-center items-center flex-col gap-1 border rounded w-32 h-32'>
                                    <MdOutlineDateRange />
                                    16th Feb
                                </div>

                                <div className='flex justify-center items-center flex-col border w-32 h-32 rounded text-center gap-1'>
                                    <CiClock2 />
                                    12PM <br /> Onwards
                                </div>

                                <div className='flex justify-center items-center flex-col border w-32 h-32 rounded gap-1'>
                                    <GiSandsOfTime />
                                    3 Hours
                                </div>
                            </div>

                            {/* action button */}
                            <div>
                                <button className='w-full mt-8 bg-yellow-500 hover:bg-[#FADA5E] text-lg py-3 text-black font-medium rounded'>Register Now at ₹599 <span className=' line-through ml-1'>2499</span></button>
                            </div>

                            <p className='underline text-center mt-3 cursor-pointer'>Click here to get team discount</p>
                        </div>


                        <div className='flex-1 flex flex-col justify-center items-center '>

                            {/* Person card */}
                            <div className=' bg-[#261f69] bg-opacity-70 justify-between flex flex-col md:flex-row  lg:w-10/12 pt-5 rounded'>
                                <div className='p-3 lg:pl-5 text-center w-full'>
                                    <h3 className='font-semibold text-green-400'>Welcome to</h3>
                                    <p className=' text-xl md:text-2xl mt-5 uppercase font-semibold text-white leading-normal'>Strategy consulting mastery workshop </p>
                                    <div className=' justify-center mt-5 flex flex-col md:flex-row gap-2'>
                                        <span className='text-xs bg-white px-5 py-2 md:py-1 rounded-full font-medium text-black'>Darsheel Savla</span>
                                        <span className='text-xs bg-white px-5 py-2 md:py-1 rounded-full font-medium text-black'>example@gmail.com</span>
                                    </div>
                                </div>
                                <div className='flex justify-end mt-5 md:hidden'>
                                    <img className=' w-40' src={person} alt="person" />
                                </div>
                                <img className=' w-40 hidden md:block' src={person} alt="person" />
                            </div>


                            <div className="divider w-10/12 mx-auto mt-12"><span className='border bg-[#261f69]   text-white font-medium px-3 py-1'>Instructed By</span></div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
