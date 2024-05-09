
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";


const Header = () => {
    return (
        <>
            <div className="absolute top-0 right-0 left-0 bottom-0">
                <img
                    src="https://images.unsplash.com/photo-1714837291207-4985c06c9a60?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-[1080px] object-cover opacity-90"
                    alt="" />
            </div>
            <div className="flex flex-col gap-14 absolute top-[700px] right-0 left-0 bottom-0 padding">
                <h2 className="font-bold text-6xl text-white">Okna <br /> a dvere</h2>

                <div className="flex justify-between">
                    <div className="flex flex-row md:gap-3 lg:gap-20 items-center">
                        <div className="flex gap-6">
                            <SlArrowLeft className="md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full bg-custom-orange text-white p-4 text-center font-bold cursor-pointer" />
                            <SlArrowRight className="md:h-20 md:w-20 lg:h-20 lg:w-20 rounded-full bg-custom-orange text-white p-4 text-center font-bold cursor-pointer" />
                        </div>

                        <div>
                            <article className="text-xl text-justify text-white w-[500px]">
                                Plastová a hliníková okna označením EkoSun, Salamander, Aluplast, Gealan, Brugman, Imperial, Econoline, MB-45; 60; 70; 86.
                            </article>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <FaFacebookF className="text-white md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                        <FaInstagram className="text-white md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                        <FaPinterestP className="text-white md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header