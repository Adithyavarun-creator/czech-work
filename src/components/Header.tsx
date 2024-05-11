
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { sliderDatas } from "../datas";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Header = () => {

    return (
        <>
            <div className="absolute top-0 right-0 left-0">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className=""
                >

                    {
                        sliderDatas.map((data) => (
                            <SwiperSlide key={data.id}
                                className=""
                            >
                                <div className="">
                                    <img src={data.imageUrl}
                                        alt=""
                                        className="w-full h-[520px] md:h-[450px] lg:h-[550px] object-cover object-center opacity-50"
                                    />
                                </div>

                                <div className="flex flex-col gap-5 md:gap-10 absolute top-52 md:top-52 lg:top-64 px-28" >
                                    <div className="">
                                        <h2 className="text-xl md:text-4xl lg:text-5xl text-custom-orange font-bold uppercase">{data.title}</h2>
                                    </div>
                                    <div className="">
                                        <span className="text-sm md:text-3xl lg:text-3xl text-black font-semibold">{data.subtitle}</span>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <FaFacebookF className="text-custom-orange md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                                        <FaInstagram className="text-custom-orange md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                                        <FaPinterestP className="text-custom-orange md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                                    </div>
                                </div>


                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </>
    )
}

export default Header


/*

 <div className="absolute top-0 right-0 left-0 bottom-0">
                <img
                    src="https://images.unsplash.com/photo-1714837291207-4985c06c9a60?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-[600px] md:h-[1080px] object-cover opacity-90"
                    alt="" />
            </div>
            <div className="flex flex-col gap-20 md:gap-14 absolute top-36 md:top-[700px] right-0 left-0 bottom-0 p-10 padding">
                <h1 className="font-bold text-6xl text-white">Okna <br /> a dvere</h1>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-3 lg:gap-20 md:items-center">
                        <div className="flex gap-6">
                            <SlArrowLeft className="w-14 h-14 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full bg-custom-orange text-white p-4 text-center font-bold cursor-pointer" />
                            <SlArrowRight className="w-16 h-16 md:h-20 md:w-20 lg:h-20 lg:w-20 rounded-full bg-custom-orange text-white p-4 text-center font-bold cursor-pointer" />
                        </div>

                        <div>
                            <article className="text-sm md:text-xl text-justify text-white w-full md:w-[500px]">
                                Plastová a hliníková okna označením EkoSun, Salamander, Aluplast, Gealan, Brugman, Imperial, Econoline, MB-45; 60; 70; 86.
                            </article>
                        </div>
                    </div>

                    <div className="flex mt-2 md:mt-0 items-center gap-5">
                        <FaFacebookF className="text-white md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                        <FaInstagram className="text-white md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                        <FaPinterestP className="text-white md:w-5 md:h-5 lg:w-7 lg:h-7 cursor-pointer" />
                    </div>
                </div>
            </div >
*/