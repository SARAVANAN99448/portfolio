const Contact = () => {
    return (
        <>
        <section>
            <h1 id="contact" className="text-4xl text-white font-bold bg-black text-center py-5 underline">Contact</h1>
            {/* Conatct form */}
            <form className="bg-black text-white  font-hero-font md:px-44 px-20  flex flex-col  " >
                <span className="">Name : </span>
                <input type="text" className=" md:w-full rounded-md text-black p-3 outline-none mt-3" required /><br />
                <span>E-mail : </span>
                <input type="text" className="md:w-full rounded-md text-black p-3  outline-none  mt-3" required /><br />
                <span>Message : </span>
                <textarea name="" id="" className="md:w-full rounded-md text-black p-3 outline-none mt-3" required></textarea> <br />
                <div className="text-center">
                <button className="border w-24 p-2 rounded-md">Submit</button>
                </div>
            </form>
            </section>
        </>
    )

}
export default Contact