import Aboutimg from "../images/about-img.jpg"
const About = () => {
    return (< >
    <section>
        <div className=" md:flex justify-between py-10 px-5  bg-black " id="about">
            <div className="md:w-1/2 flex justify-center  ">
                {/* About image  */}
                <img src={Aboutimg} alt="" className="w-[60%] rounded-lg md:rounded-full" />
            </div>
            <div className="md:w-1/2 flex justify-center items-center mt-5 ">
                <div className="text-white flex flex-col gap-5">
                    <h1 className="text-3xl border-b-2 w-36 font-bold text-center">About Me</h1>
                    {/* About message */}
                    <p>I am a motivated and enthusiastic Full Stack Developer with a strong foundation in web development technologies. As a fresher, I have hands-on experience with front-end tools like HTML, CSS, JavaScript, React, and Tailwind CSS, as well as back-end technologies including Express.js and MongoDB. I am also skilled in working with databases and have used Firebase for authentication in my projects. Familiar with version control using Git and GitHub</p>
                    <p> I am passionate about learning new technologies and building creative, user-friendly web applications. Eager to grow and take on new challenges, I am excited to contribute to impactful projects and continuously improve my development skills.</p>
                </div>
            </div>
        </div>
        <hr />
        </section>
    </>)

}
export default About