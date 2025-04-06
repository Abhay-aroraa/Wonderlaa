import { FaBars } from "react-icons/fa";
import { IoLocationOutline, IoTicketSharp } from "react-icons/io5";
import logo from "../../assets/images/Mai.webp"
import offer from "../../assets/images/offer.webp"
import event from "../../assets/images/event.webp"
import rest from "../../assets/images/rest.webp"
import rides from "../../assets/images/offer.webp"
const Navbar = () => {
    return (
        <nav className="bg-white mt-8  h-[60px] mx-8 text-[#717d92] py-1 px-6 flex items-center justify-between rounded-2xl pr-[38px]">

            <div className="p-2 rounded-lg items-center space-x-2 inline-block capitalize -ml-4 hover:scale-105 transition-transform duration-200 ease-in-out">
                <img src={logo} alt="Logo" className="h-full w-full     object-contain" />
            </div>


            {/* Center Section - Menu Items */}
            <div className="hidden lg:flex space-x-8 text-sm font-black uppercase">
                <a href="#" className="flex items-center space-x-1">
                    <IoLocationOutline className="w-5 h-5" />
                    <span>LOCATIONS</span>
                </a>
                <a href="#" className="flex items-center space-x-1">
                    <img src={offer} alt="Offer" className="w-[18px] h-[18px] object-contain filter brightness-0 invert-[40%] sepia-[10%] saturate-[300%] hue-rotate-[200deg]" />

                    <span>OFFERS</span>
                </a>
                <a href="#" className="flex items-center space-x-1">
                    <img src={rides} alt="Offer" className="w-[18px] h-[18px] object-contain filter brightness-0 invert-[40%] sepia-[10%] saturate-[300%] hue-rotate-[200deg]" />

                    <span>RIDES</span>
                </a>
                <a href="#" className="flex items-center space-x-1">
                    <img src={rest} alt="Offer" className="w-[18px] h-[18px] object-contain filter brightness-0 invert-[40%] sepia-[10%] saturate-[300%] hue-rotate-[200deg]" />

                    <span>RESTAURANTS</span>
                </a>
                <a href="#" className="flex items-center space-x-1">
                    <img src={event} alt="Offer" className="w-[18px] h-[18px] object-contain filter brightness-0 invert-[40%] sepia-[10%] saturate-[300%] hue-rotate-[200deg]" />

                    <span>EVENTS</span>
                </a>
            </div>



            <div className="flex shrink-0 items-center gap-3 lg:gap-5 px-3">

                <button className="bg-yellow-400 text-[#4b5eb6] capitalize text-sm font-black flex items-center justify-center  py-1 rounded-lg px-2 hover:scale-105 transition-transform duration-200 ease-in-out">
                    BOOK TICKETS <IoTicketSharp className="w-4 h-3" />
                </button>


                <FaBars className="text-[#334dcf] text-2xl cursor-pointer w-6 h-6 flex items-center justify-center" />
            </div>

        </nav>
    );
};

export default Navbar;
