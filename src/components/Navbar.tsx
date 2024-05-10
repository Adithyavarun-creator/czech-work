import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


interface NavbarProps {
    contact?: boolean
}


const Navbar = ({ contact }: NavbarProps) => {


    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <>
            <nav className="hidden md:flex justify-between padding z-50">
                <Link to="/" className="">
                    <img src="https://i.pinimg.com/736x/05/bb/5d/05bb5d3cc73dd567808d76517b598987.jpg"
                        className="object-contain w-full h-10 cursor-pointer"
                        alt="logo"
                    />
                </Link>
                <div>
                    <ul className="flex items-center gap-8 cursor-pointer">
                        <li className={`${contact ? 'text-black' : 'text-white'} font-bold md:text-sm lg:text-xl`}>Producty</li>
                        <li className={`${contact ? 'text-black' : 'text-white'} font-bold md:text-sm lg:text-xl`}>O nas</li>
                        <li className={`${contact ? 'text-black' : 'text-white'} font-bold md:text-sm lg:text-xl`}>Reference</li>
                        <li className={`${contact ? 'text-black' : 'text-white'} font-bold md:text-sm lg:text-xl`}>Identita</li>
                        <Link to="/contact" className={`${contact ? 'text-black' : 'text-white'} font-bold md:text-sm lg:text-xl`}>Kontakt</Link>
                    </ul>
                </div>
                <div>
                    <button className={`${contact ? 'text-white' : 'bg-white hover:bg-custom-orange text-black rounded-md shadow-2xl'}  cursor-pointer px-6 py-2 text-center md:text-sm lg:text-xl font-medium`}>
                        Akni Nabdica
                    </button>
                </div>
            </nav>



            <nav className="relative md:hidden z-50">
                <div className="flex justify-between p-12">
                    <Link to="/">
                        <img src="https://i.pinimg.com/736x/05/bb/5d/05bb5d3cc73dd567808d76517b598987.jpg"
                            className="object-contain w-full h-10 cursor-pointer"
                            alt="logo"
                        />
                    </Link>
                    <div>
                        <RiMenu3Line className="w-10 h-10 text-custom-orange" onClick={() => setToggle(!toggle)} />
                    </div>
                </div>


                {toggle && <div className="absolute p-10 top-0 right-0 left-0 h-screen bg-orange-600">
                    <div className="flex justify-end">
                        <IoClose className="w-20 h-20 text-white" onClick={() => setToggle(false)} />
                    </div>

                    <div className="mt-12">
                        <ul className="flex flex-col list-none justify-center items-center gap-10">
                            <li className={`text-white font-semibold text-2xl`}>Producty</li>
                            <li className={`text-white font-semibold text-2xl`}>O nas</li>
                            <li className={`text-white font-semibold text-2xl`}>Reference</li>
                            <li className={`text-white font-semibold text-2xl`}>Identita</li>
                            <Link to="/contact" className={`text-white font-semibold text-2xl`}>Kontakt</Link>
                        </ul>
                    </div>
                </div>}
            </nav>
        </>
    )
}

export default Navbar