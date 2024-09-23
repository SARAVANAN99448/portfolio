import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"
// Here my projects data 
const config =
{
    projects: [
        {
            image: project1,
            description: "Weather App",
            github: "https://github.com/SARAVANAN99448/Weather-app",
            live: "https://weather-app-chi-eight-58.vercel.app/"
        },
        {
            image: project2,
            description: "Todo App",
            github: "https://github.com/SARAVANAN99448/actodo",
            live: "https://actodo-ten-xi.vercel.app"
        },
        {
            image: project3,
            description: "Udemy clone project",
            github: "https://github.com/SARAVANAN99448/Udemy-clone-react",
            live: "https://udemy-clone-react-three.vercel.app/"
        },
        {
            image: project4,
            description: "Perfumey ",
            github: "https://github.com/SARAVANAN99448/React-perfumy",
            live: "https://react-perfumy-4sis.vercel.app/"
        }
    ]
}

const Project = () => {
    return (<>
        <div className="bg-black flex flex-col justify-center " id="projects">
            <div className=" text-center md:px-5 text-white   flex flex-col justify-center  gap-3  ">
                <h1 className="text-4xl decoration-white underline mb-5 mt-5 font-bold ">Projects</h1>
            </div>
            <div className="flex  px-10 py-5 basis-10/12 flex-wrap gap:10 justify-center md:justify-between ">
                {/* mapping projects */}
                {
                    config.projects.map(function (data) {
                        return (
                            <div className="relative  mb-10 ">
                                <img src={data.image} alt="" className="w-[300px] h-[200px] rounded-md " />
                                <div className="bg-black absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center duration-500 opacity-0 hover:opacity-100">
                                    <p className="text-center text-white mb-3 btn" style={{ backgroundColor: 'blue' }}><a href={data.live}>Live website </a></p>
                                    <p className="text-center text-white btn bg-green-500" style={{ backgroundColor: 'green' }}><a href={data.github}>Github</a></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <hr />
    </>)

}
export default Project