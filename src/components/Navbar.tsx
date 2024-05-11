import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

interface NavbarProps {
    contact?: boolean
}


const Navbar = ({ contact }: NavbarProps) => {


    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <>
            <nav className="hidden md:flex justify-between py-10 px-10 z-50">
                <Link to="/" className="">
                    <img src={Logo}
                        className="object-contain w-full h-10 cursor-pointer"
                        alt="logo"
                    />
                </Link>
                <div>
                    <ul className="flex items-center gap-8 cursor-pointer">
                        <li className={`${contact ? 'text-black' : 'text-custom-orange'} font-bold md:text-sm lg:text-xl`}>Producty</li>
                        <li className={`${contact ? 'text-black' : 'text-custom-orange'} font-bold md:text-sm lg:text-xl`}>O nas</li>
                        <li className={`${contact ? 'text-black' : 'text-custom-orange'} font-bold md:text-sm lg:text-xl`}>Reference</li>
                        <li className={`${contact ? 'text-black' : 'text-custom-orange'} font-bold md:text-sm lg:text-xl`}>Identita</li>
                        <Link to="/contact" className={`${contact ? 'text-black' : 'text-custom-orange'} font-bold md:text-sm lg:text-xl`}>Kontakt</Link>
                    </ul>
                </div>
                <div>
                    <button className={`${contact ? 'text-white' : 'bg-white hover:bg-custom-orange text-black rounded-md shadow-2xl'}  cursor-pointer px-6 py-2 text-center md:text-sm lg:text-xl font-medium`}>
                        Akni Nabdica
                    </button>
                </div>
            </nav>



            <nav className="relative md:hidden z-50">
                <div className="flex justify-between p-10">
                    <Link to="/">
                        <img src={Logo}
                            className="object-contain w-full h-10 cursor-pointer"
                            alt="logo"
                        />
                    </Link>
                    <div>
                        <RiMenu3Line className="w-10 h-10 text-custom-orange" onClick={() => setToggle(!toggle)} />
                    </div>
                </div>


                {toggle &&
                    <div className="fixed p-10 top-0 right-0 left-0 h-screen bg-orange-600 overflow-y-scroll">
                        <div className="flex justify-end ">
                            <IoClose className="w-12 h-12 rounded-full bg-white text-custom-orange" onClick={() => setToggle(false)} />
                        </div>

                        <div className="mt-12">
                            <ul className="flex flex-col list-none justify-center items-center gap-5">
                                <li className={`text-white font-semibold text-2xl`}>Producty</li>
                                <li className={`text-white font-semibold text-2xl`}>O nas</li>
                                <li className={`text-white font-semibold text-2xl`}>Reference</li>
                                <li className={`text-white font-semibold text-2xl`}>Identita</li>
                                <Link to="/contact" className={`text-white font-semibold text-2xl`}>Kontakt</Link>
                            </ul>
                        </div>

                        <div className="mt-20 flex justify-center items-center gap-5">
                            <FaFacebookF className="text-white w-8 h-8 cursor-pointer" />
                            <FaInstagram className="text-white w-8 h-8 cursor-pointer" />
                            <FaPinterestP className="text-white w-8 h-8 cursor-pointer" />
                        </div>
                    </div>}
            </nav>
        </>
    )
}

export default Navbar