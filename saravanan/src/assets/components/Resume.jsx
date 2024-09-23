import img from "../images/resume.jpg"
import resume from "../images/Saro resume.pdf"

const Resume = () => {
    return (
        <>
            <div className=" md:flex justify-between py-5 px-5 bg-black ">
                <div className="md:w-1/2 flex justify-center  ">
                    {/* Resume img */}
                    <img src={img} alt="" className="w-[60%] rounded-lg md:rounded-3xl" />
                </div>
                <div className="md:w-1/2 flex justify-center items-center mt-5">
                    <div className="text-white flex flex-col gap-5">
                        <h1 className="text-3xl underline  w-36 font-bold">Resume  </h1>
                        <p>You can view my resume here <a className="btn" href={resume} download={"resume"} style={{ backgroundColor: "green" }}>Download</a></p>
                    </div>
                </div>
            </div>
            <hr />
        </>


    )

}
export default Resume