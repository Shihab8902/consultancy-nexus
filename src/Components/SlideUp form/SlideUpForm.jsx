import { useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import Swal from 'sweetalert2';

const SlideUpForm = ({ showForm, setShowForm }) => {

    //Trigger form popup with page load after 15sec
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(!showForm);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);



    //Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            text: "Registered successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
        e.target.reset();
        setShowForm(!showForm);

    }


    return (
        <div className={`fixed  z-50 w-full sm:w-1/2 bg-white p-5 transform transition-transform duration-500 ${showForm ? 'translate-y-0 left-2 bottom-2' : 'translate-y-full left-0 bottom-0'}`}>
            {showForm && (
                <>
                    <button onClick={() => setShowForm(!showForm)} className="absolute top-0  text-2xl right-0 p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                        <IoMdClose />
                    </button>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

                        <h3 className='text-center text-3xl font-semibold my-5'>Register Now at ₹599 <span className=' line-through ml-1 text-sm'>2499</span> </h3>

                        <label htmlFor="phone" className="text-lg font-medium">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" className="p-2 border border-gray-300 rounded outline-none" placeholder='Enter your contact number' required />

                        <label htmlFor="email" className="text-lg font-medium">Email Address:</label>
                        <input type="email" id="email" name="email" className="p-2 border border-gray-300 rounded outline-none" placeholder='Enter your email' required />

                        <button type="submit" className="bg-yellow-500  py-2 rounded text-black font-medium">Register</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default SlideUpForm;
