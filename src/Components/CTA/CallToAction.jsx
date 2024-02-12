

const CallToAction = ({ showForm, setShowForm }) => {
  return <div className="container mx-auto px-5">

    <div className="bg-green-800 flex flex-col md:flex-row text-white border-2 rounded-lg p-5 md:p-12">

      <div className=" md:w-8/12 md:border-r-2 ">
        <h3 className="text-3xl font-semibold">Crash course Launch Offer (Save INR 1900)</h3>

        <ul className="mt-8 list-disc ml-5 font-medium">
          <li className="mb-3">Learn the toolkit of the professional in just 3 hours.</li>
          <li className="mb-3">Enjoy the discounted price of  ₹599</li>
          <li>The launch offer expires soon, grab your seat NOW!</li>
        </ul>
      </div>

      <div className="md:ml-10 mt-10 md:mt-0 border-t-2 md:border-none">
        <p className="text-lg font-semibold">Price of the program</p>
        <h3 className="text-5xl font-semibold my-3">₹599 <span className=' line-through ml-1 text-lg'>2499</span></h3>
        <button onClick={() => setShowForm(!showForm)} className="bg-yellow-500 hover:bg-yellow-400 w-full lg:w-fit px-5 lg:px-10 py-6 text-black font-medium rounded">Register Now</button>
      </div>

    </div>


  </div>
}

export default CallToAction