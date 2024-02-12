import about from '../../assets/images/about.jpg';



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
            <div className='flex-1 md:bg-gray-100 rounded-xl '>


                <ul className="list-disc  font-medium p-2 md:p-10">
                    <li className="mb-5">
                        As a seasoned marketing consultant, I've helped numerous businesses strategize and execute successful marketing campaigns.
                    </li>
                    <li className="mb-5">
                        My approach involves understanding your target audience, analyzing market trends, and crafting compelling messages to drive engagement.
                    </li>
                    <li className="mb-5">
                        Leveraging digital marketing tools and analytics, I optimize campaigns for maximum ROI and long-term growth.
                    </li>
                    <li className="mb-5">
                        From social media management to SEO, I offer a comprehensive range of services tailored to your business needs.
                    </li>
                    <li >
                        Let's collaborate to elevate your brand and achieve your marketing goals together.
                    </li>
                </ul>



            </div>

        </div>



    </div >
}

export default About