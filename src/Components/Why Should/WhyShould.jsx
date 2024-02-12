import { LiaBusinessTimeSolid } from "react-icons/lia";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LuBarChartBig } from "react-icons/lu";
import { CgInsights } from "react-icons/cg";
import { FaHandshake } from "react-icons/fa";


const WhyShould = () => {
    return <div className="container mx-auto px-5 ">
        {/* Heading */}
        <div className="text-center font-semibold text-2xl md:text-3xl">
            <h3 className=" text-green-600">But,</h3>
            <p>Why should You go ahead with Me?</p>
        </div>

        {/* Main content */}
        <div className="mt-20 flex flex-wrap justify-evenly items-center gap-10 gap-y-16">

            <div className=" w-72">
                <LiaBusinessTimeSolid className="text-7xl mx-auto" />
                <p className="text-center font-medium">Expertise in tailored strategies for your business's success.</p>
            </div>

            <div className=" w-72">
                <FaMoneyCheckDollar className="text-7xl mx-auto" />
                <p className="text-center font-medium">Personalized solutions within your budget, yielding proven results.</p>
            </div>

            <div className=" w-72">
                <LuBarChartBig className="text-7xl mx-auto" />
                <p className="text-center font-medium">Demonstrated success with satisfied clients, driving significant growth.</p>
            </div>

            <div className=" w-72">
                <CgInsights className="text-7xl mx-auto" />
                <p className="text-center font-medium">Strategic insights for staying ahead in the competitive market.</p>
            </div>

            <div className=" w-72">
                <FaHandshake className="text-7xl mx-auto" />
                <p className="text-center font-medium">Long-term partnership for navigating digital marketing effectively.</p>
            </div>

        </div>




    </div>



}

export default WhyShould