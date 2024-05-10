import { faLocationDot, faMobileScreenButton, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-10 padding bg-footer">

            <div className="flex flex-col gap-20">

                <div>
                    <img src="https://i.pinimg.com/736x/05/bb/5d/05bb5d3cc73dd567808d76517b598987.jpg"
                        className="object-contain w-10 h-10 cursor-pointer"
                        alt="logo"
                    />
                </div>

                <div className="flex items-center gap-5">
                    <FaFacebookF className="text-white w-7 h-7 cursor-pointer" />
                    <FaInstagram className="text-white w-7 h-7 cursor-pointer" />
                    <FaPinterestP className="text-white w-7 h-7 cursor-pointer" />
                    <span className="text-gray-400">2020 © pzmOKNA s.r.o.</span>
                </div>

            </div>




            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-3 items-center">
                    <FontAwesomeIcon icon={faLocationDot}
                        className="md:w-7 md:h-7 lg:w-10 lg:h-10 text-custom-yellow"
                    />
                    <span className="text-white md:text-sm lg:text-xl font-medium cursor-pointer">Smilova 349, 530 02 Pardubice</span>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <FontAwesomeIcon icon={faClock}
                        className="md:w-7 md:h-7 lg:w-10 lg:h-10 text-custom-yellow"
                    />
                    <span className="text-white md:text-sm lg:text-xl font-medium cursor-pointer">Po–Čt: 9–16 h.</span>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <FontAwesomeIcon icon={faMobileScreenButton}
                        className="md:w-7 md:h-7 lg:w-10 lg:h-10 text-custom-yellow"
                    />
                    <span className="text-white md:text-sm lg:text-xl font-medium cursor-pointer">(+420) 737 647 668</span>
                </div>
            </div>


            <div className="flex flex-col gap-20">
                <article className="font-medium text-sm text-white text-justify">
                    Firma pzmOKNA s.r.o. je rodinná firma, která nabízí kompletní realizace zakázek od plánování a řešení technické otázky až po samotnou realizaci stavby, která může obsahovat demontáž, montáž, zednické práce, včetně vyzdívek v panelových domech.
                </article>
                <div className="flex justify-between gap-10">
                    <span className="text-white text-sm">Ochrana osobních údajů</span>
                    <span className="text-custom-orange text-sm">Website by PekneWeby</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer