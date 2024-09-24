import heroimg from "../images/saro.jpg"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter"
const Hero = () => {
    // Using Typewriter
    const [text] = useTypewriter({
        words: [' a full stack developer', 'frontend developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    })
    return (<>
    <section>
        <div className=" md:flex justify-center px-5 md:py-32 py-10 bg-black">
            {/* Hero section */}
            <div className=" md:w-1/2  flex flex-col justify-center font-hero-font text-center md:text-left">
                <h1 className=" text-4xl  md:text-6xl mb-3 text-white">Hi, <br />am Saravanan R</h1>
                <p className="text-pretty md:text-2xl text-white font-bold "> I am  <span className="font-bold text-white">{text}</span><span className="text-green-400"><Cursor cursorStyle="|" /></span></p>
                <div className=" hidden md:flex gap-10 md:py-10 py-5 ">
                    <a href="https://github.com/SARAVANAN99448?tab=repositories" className="text-4xl text-white"><AiOutlineGithub /></a>
                    <a href="https://www.linkedin.com/in/saravanan012/" className="text-4xl text-white"><AiOutlineLinkedin /></a>
                    <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" className="text-4xl text-white"></a>
                </div>
            </div>
            {/* For sm display */}
            <div className=" flex justify-center md:hidden">
                <img src={heroimg} alt="" className="w-1/2 mt-10  md:w-1/2 " style={{ borderRadius: "100%" }} />
            </div>
            {/* For desktop */}
            <img src={heroimg} alt="" className=" hidden md:block w-1/2   md:w-1/4 " style={{ borderRadius: "100%" }} />
        </div>
        <hr />
        </section>
    </>
    )

}
export default Hero