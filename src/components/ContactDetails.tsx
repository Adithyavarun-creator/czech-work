import { faMobileScreenButton, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Map1, Map2, Map3 } from "../assets"


const ContactDetails = () => {
    return (
        <section className="mt-[200px] md:mt-[380px] lg:mt-[505px] flex flex-col">
            {/* box-1 */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-1 flex flex-col gap-4 p-10 md:p-12 lg:p-24">
                    <h2 className="md:text-sm lg:text-xl font-bold text-black">pzmOKNA s.r.o.</h2>
                    <h3 className="md:text-sm lg:text-xl text-black">
                        IČ 28852893, DIČ CZ28852893 Smilova 349, 530 02 Pardubice
                    </h3>
                    <h4 className="md:text-sm lg:text-xl text-black">
                        <span className="font-bold">Bankovní spojení </span>107-3029490297/0100
                    </h4>
                    <h5 className="md:text-sm lg:text-xl text-black">
                        <span className="font-bold">E-mail  </span>pzmokna@email.cz
                    </h5>
                    <h6 className="md:text-sm lg:text-xl text-black">
                        <span className="font-bold">ID datové schránky   </span>w5ije2g
                    </h6>
                    <p className="md:text-sm lg:text-xl font-medium italic">Společnost je zapsaná v OR vedeném Krajským soudem v Hradci Králové, oddíl C, vložka č.31068</p>
                </div>


                <div className="col-span-1 md:col-span-2 bg-[#241E0E] p-10 md:p-20 flex justify-center gap-20 md:gap-20 items-center">
                    <div>
                        <h2 className="md:text-3xl lg:text-5xl font-medium text-white">Jana Vojířová</h2>
                        <h3 className="md:text-xl lg:text-3xl font-medium text-white">Vedoucí poboček</h3>
                    </div>


                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-3 items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-white"
                            />
                            <span className="text-white text-sm font-medium cursor-pointer">pzmokna@email.cz</span>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FontAwesomeIcon icon={faMobileScreenButton}
                                className="w-5 h-5 text-white"
                            />
                            <span className="text-white text-sm font-medium cursor-pointer">(+420) 737 647 668</span>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FontAwesomeIcon icon={faClock}
                                className="w-5 h-5 text-white"
                            />
                            <span className="text-white text-sm font-medium cursor-pointer">08:30 – 16:00</span>
                        </div>

                    </div>
                </div>
            </div>


            {/* box-2 */}
            <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-10 md:gap-16 p-10 md:p-12 lg:p-24">
                    <div className="col-span-1">
                        <h2 className="md:text-3xl lg:text-4xl text-black font-medium">
                            Centrální vzorková <br /> prodejna PARDUBICE
                        </h2>
                    </div>

                    <div className="col-span-1 flex flex-col gap-2">
                        <span className="font-medium md:text-xs lg:text-xl">
                            Smilova 349, 530 02 Pardubice
                        </span>
                        <span className="font-medium md:text-xs lg:text-xl">
                            pzmokna@email.cz
                        </span>
                        <span className="font-medium md:text-xs lg:text-xl">
                            +420 737 647 668
                        </span>
                    </div>


                    <div className="col-span-1 flex flex-col gap-2">
                        <span className="font-medium text-xs md:text-xs lg:text-xl">
                            PO 09:00 – 16:00
                        </span>
                        <span className="font-medium text-xs md:text-xs lg:text-xl">
                            ÚT 09:00 – 16:00
                        </span>
                        <span className="font-medium text-xs md:text-xs lg:text-xl">
                            ST 09:00 – 16:00
                        </span>
                        <span className="font-medium text-xs md:text-xs lg:text-xl">
                            ČT 09:00 – 16:00
                        </span>
                        <span className="font-medium text-xs md:text-xs lg:text-xl">
                            PÁ zavřeno
                        </span>
                        <span className="mt-6 font-medium text-xs md:text-xs lg:text-xl">
                            * Polední přestávka 11:30-12:30
                        </span>
                    </div>
                </div>

                <div className="w-full pr-10 md:pr-0 md:w-1/2 mt-0 md:mt-2 lg:-mt-48 pl-10 md:pl-12 lg:pl-24 z-10">
                    <div className="">
                        <img
                            className="w-full h-max object-cover"
                            src={Map1}
                            alt="" />
                    </div>
                </div>
            </div>






            {/* box-3 */}
            <div className="mt-5 md:-mt-14 bg-[#473B1D] relative flex flex-col md:gap-20 lg:gap-40 p-10 md:px-12 lg:p-24">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6 md:gap-10 lg:gap-15">
                    <div className="col-span-1 md:py-20">
                        <h2 className="text-4xl text-white font-medium">
                            Vzorková prodejna  <br /> HLINSKO
                        </h2>
                    </div>

                    <div className="col-span-1 flex flex-col gap-2">
                        <span className="font-medium text-white md:text-sm lg:text-xl">
                            Wilsonova 214, 539 01 Hlinsko
                        </span>
                        <span className="font-medium text-white md:text-sm lg:text-xl">
                            hlinsko@pzmokna.cz
                        </span>
                        <span className="font-medium text-white md:text-sm lg:text-xl">
                            +420 605 368 930
                        </span>
                    </div>


                    <div className="col-span-1 flex flex-col gap-2">
                        <span className="font-medium text-white md:text-sm lg:text-xl">
                            Z důvodu mateřské dovolené pouze po telefonické domluvě.
                        </span>
                    </div>
                </div>

                <div className="mt-5 md:mt-0 flex md:absolute md:top-56 lg:top-80 right-0 w-full md:w-1/2 pr-10 md:pr-12 lg:pr-24 z-10">
                    <div className="">
                        <img
                            className="w-full h-max object-cover"
                            src={Map2}
                            alt="" />
                    </div>
                </div>


            </div>


            {/* box-4 */}
            <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 md:mt-40 lg:mt-48 justify-between gap-5 p-10 md:p-20 lg:p-24">
                    <div className="col-span-1">
                        <h2 className="text-4xl text-black font-medium">
                            Výdejní sklad
                        </h2>
                    </div>

                    <div className="col-span-1 flex flex-col gap-2">
                        <span className="font-medium md:text-sm lg:text-xl">
                            Letecká 214 530 02 Pardubice
                        </span>
                        <span className="font-medium md:text-sm lg:text-xl">
                            (areál firmy ENERGOSTAV)
                        </span>
                    </div>


                    <div className="col-span-1 flex flex-col gap-10">
                        <span className="font-medium md:text-sm lg:text-xl">
                            Za čerpací stanicí BENZINA Sklad je určen pro výdej maloobchod i velkoobchod.
                        </span>
                        <span className="font-medium md:text-sm lg:text-xl">
                            Výdej na základě telefonní dohody p. Vojíř +420 776 887 434
                        </span>

                    </div>

                </div>


                <div className="w-full pr-10 md:pr-0 md:w-1/2 md:-mt-32 lg:-mt-36 pl-10 md:pl-12 lg:pl-24 z-10">
                    <div className="">
                        <img
                            className="w-full mb-5 md:mb-0 h-max object-cover"
                            src={Map3}
                            alt="" />
                    </div>
                </div>
            </div>


            {/* box-5 */}
            <div className="md:-mt-14 lg:-mt-20 -z-10 bg-custom-orange flex items-center md:h-[450px] lg:h-[643px] p-10 md:p-12 lg:p-24">
                <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-10 md:gap-20 lg:gap-15">
                    <div className="col-span-1">
                        <h2 className="text-4xl text-black font-medium">
                            Zašlete nám poptávku
                        </h2>
                    </div>

                    <div className="col-span-1 flex flex-col gap-2">
                        <span className="font-medium text-black md:text-sm lg:text-xl">
                            Zašlete nám poptávku na
                        </span>
                        <span className="font-medium text-black md:text-sm lg:text-xl">
                            pzmokna@email.cz
                        </span>

                    </div>

                    <div className="col-span-1">
                        <button className="bg-black text-white rounded-md px-6 py-2">Zadat poptávku</button>
                    </div>


                    <div className="col-span-1 flex flex-col gap-12">
                        <span className="font-medium text-black md:text-sm lg:text-xl">
                            V případě potřeby doplňujících informací Vás budeme kontaktovat.
                        </span>
                        <span className="font-medium text-black md:text-sm lg:text-xl">
                            Zpracování poptávky vyřizujeme standardně do 48 hodin.
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactDetails