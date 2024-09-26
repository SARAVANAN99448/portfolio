import { AiOutlineWhatsApp, AiOutlineMail, } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black flex justify-center  pb-5 text-white text-center pt-10 md:text-xl font-hero-font">
                    {/* my details */}
                    <a href="https://wa.me/7418108940" target="_blank" className="px-5"><AiOutlineWhatsApp size={40} /></a>
                    <a href="mailto:saravanasaro0000@gmail.com" target="_blank" className="px-5"><AiOutlineMail size={40} /></a>
                    <a href="tel:7418108940" className="px-5" target="_blank" ><BiSolidPhoneCall size={40} /></a>

                </div>
                <div className="bg-black text-center text-white  font-hero-font ">
                    <p>&copy;saravanan</p>
                </div>
            </footer>
        </>
    )

}
export default Footer