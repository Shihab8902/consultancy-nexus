import { useState, useEffect } from 'react';

const CountDown = ({ showForm, setShowForm }) => {
    const [timeLeft, setTimeLeft] = useState(600); // Initial 10 minutes time in second


    //Decrease the second in every second
    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);


    //Format the time to show in the UI properly
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return (
            <div className="text-2xl md:text-6xl font-bold mb-4 flex gap-5">
                <div>
                    <span>00</span>
                    <p className='text-xs'>Hours</p>
                </div>
                :
                <div>
                    <span>{minutes.toString().padStart(2, '0')}</span>
                    <p className='text-xs'>Minutes</p>
                </div>
                :
                <div>
                    <span>{seconds.toString().padStart(2, '0')}</span>
                    <p className='text-xs'>Seconds</p>
                </div>

            </div>
        );
    };



    return (
        <div className="my-20 bg-green-800 py-20">
            <div className="text-center container mx-auto text-white">
                <h3 className='text-xl md:text-3xl font-semibold'>Time is running out.</h3>
                <h4 className='text-xl md:text-3xl font-semibold mt-1'>Grab your spot <span className=' border-b-2 inline-block'>fast!</span></h4>
                <div className=' flex justify-center my-10'> {formatTime(timeLeft)}</div>

                <div>
                    <button onClick={() => setShowForm(!showForm)} className='w-3/4 md:w-5/12  bg-yellow-500 hover:bg-yellow-400 text-lg py-4 text-black font-medium rounded'>
                        {
                            timeLeft > 0 ? <span>Register Now at ₹599 <span className=' line-through ml-1'>2499</span></span> : <span>Register at ₹2499</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountDown;
