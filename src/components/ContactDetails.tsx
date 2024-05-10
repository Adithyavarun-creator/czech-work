import { faMobileScreenButton, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ContactDetails = () => {
    return (
        <section className="md:mt-[380px] lg:mt-[505px] flex flex-col">
            {/* box-1 */}
            <div className="grid grid-cols-3">
                <div className="col-span-1 flex flex-col gap-4 md:p-12 lg:p-24">
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
                <div className="col-span-2 bg-[#241E0E] p-20 flex justify-between md:gap-20 items-center">
                    <div>
                        <h2 className="md:text-4xl lg:text-5xl font-medium text-white">Jana Vojířová</h2>
                        <h3 className="md:text-2xl lg:text-3xl font-medium text-white">Vedoucí poboček</h3>
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
            <div className="grid grid-cols-3 justify-between gap-5 md:p-12 lg:p-24">
                <div className="col-span-1">
                    <h2 className="text-4xl text-black font-medium">
                        Centrální vzorková <br /> prodejna PARDUBICE
                    </h2>
                </div>

                <div className="col-span-1 flex flex-col gap-2">
                    <span className="font-medium md:text-sm lg:text-xl">
                        Smilova 349, 530 02 Pardubice
                    </span>
                    <span className="font-medium md:text-sm lg:text-xl">
                        pzmokna@email.cz
                    </span>
                    <span className="font-medium md:text-sm lg:text-xl">
                        +420 737 647 668
                    </span>
                </div>


                <div className="col-span-1 flex flex-col gap-2">
                    <span className="font-medium md:text-sm lg:text-xl">
                        PO 09:00 – 16:00
                    </span>
                    <span className="font-medium md:text-sm lg:text-xl">
                        ÚT 09:00 – 16:00
                    </span>
                    <span className="font-medium md:text-sm lg:text-xl">
                        ST 09:00 – 16:00
                    </span>
                    <span className="font-medium md:text-sm lg:text-xl">
                        ČT 09:00 – 16:00
                    </span>
                    <span className="font-medium md:text-sm lg:text-xl">
                        PÁ zavřeno
                    </span>
                    <span className="mt-6 font-medium md:text-sm lg:text-xl">
                        * Polední přestávka 11:30-12:30
                    </span>
                </div>
            </div>


            {/* box-3 */}
            <div className="md:[600px] lg:h-[942px] bg-[#473B1D] flex flex-col gap-40 md:p-12 lg:p-24">
                <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-2 md:-mt-20 lg:-mt-72">
                        <img
                            className="md:h-[300px] lg:h-[450px] object-cover"
                            src="https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg" alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-3 justify-between gap-15">
                    <div className="col-span-1">
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



                <div className="grid grid-cols-2 gap-10">
                    <div className="-mt-14 col-span-2 flex justify-end">
                        <img
                            className="md:h-[300px] lg:h-[450px] object-cover"
                            src="https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg" alt="" />
                    </div>
                </div>
            </div>


            {/* box-4 */}
            <div className="grid grid-cols-3 md:mt-10 lg:mt-48 justify-between gap-5 md:p-20 lg:p-24">
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


            <div className="z-40 grid grid-cols-2 gap-10 md:p-12 lg:p-24">
                <div className="col-span-2 md:-mt-52 lg:-mt-60">
                    <img
                        className="md:h-[300px] lg:h-[450px] object-cover"
                        src="https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg" alt="" />
                </div>
            </div>



            {/* box-6 */}
            <div className="md:-mt-20 lg:-mt-60 z-10 bg-custom-orange flex items-center md:h-[450px] lg:h-[643px] md:p-12 lg:p-24">
                <div className="grid grid-cols-4 justify-between md:gap-20 lg:gap-15">
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