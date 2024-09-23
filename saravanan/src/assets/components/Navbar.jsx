import { useState } from "react"
const Navbar = () => {
  const [menu, setmenu] = useState(false)

  return (
    <>
      <header className="flex justify-between py-2 px-5 bg-black items-center ">
        <h1 className="font-bold text-2xl font-hero-font text-white md:text-black">Saravanan.R</h1>
        <nav>
          {/* Desktop Navbar */}
          <ul className=" hidden md:flex gap-10 text-white font-semibold ">
            <li><a href="/">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>


          {/* Mobile Navbar */}
          {menu &&
            <nav className="fixed md:hidden top-12  left-0 w-1/2 h-1/4 bg-slate-900">
              <ul onClick={() => { setmenu(!menu) }} className=" mobile-nav  h-full text-white  flex flex-col">
                <li><a href="/">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          }
          <button onClick={() => { setmenu(!menu) }} className="md:hidden text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
        </nav>
      </header>
      <hr />
    </>
  )
}
export default Navbar