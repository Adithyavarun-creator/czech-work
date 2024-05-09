import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

{/* <FontAwesomeIcon icon={faClock} /> */ }


const Identity = () => {
    return (
        <section className="flex flex-col gap-14 padding">

            <div>
                <h1 className="text-black text-6xl font-medium">Firemní identita</h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-16">
                <div className="flex gap-4">
                    <div>
                        <FontAwesomeIcon icon={faClockRotateLeft} className="w-10 h-10 text-custom-orange" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold">Spolehlivost</h2>
                        <article className="text-justify w-[250px]">
                            Striktně dodržujeme všechny termíny a to, na čem jsme se domluvili se zákazníkem.
                        </article>
                    </div>
                </div>


                <div className="flex gap-4">
                    <div>
                        <FontAwesomeIcon icon={faClockRotateLeft} className="w-10 h-10 text-custom-orange" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold">Spolehlivost</h2>
                        <article className="text-justify w-[250px]">
                            Striktně dodržujeme všechny termíny a to, na čem jsme se domluvili se zákazníkem.
                        </article>
                    </div>
                </div>


                <div className="flex gap-4">
                    <div>
                        <FontAwesomeIcon icon={faClockRotateLeft} className="w-10 h-10 text-custom-orange" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold">Spolehlivost</h2>
                        <article className="text-justify w-[250px]">
                            Striktně dodržujeme všechny termíny a to, na čem jsme se domluvili se zákazníkem.
                        </article>
                    </div>
                </div>



                <div className="flex gap-4">
                    <div>
                        <FontAwesomeIcon icon={faClockRotateLeft} className="w-10 h-10 text-custom-orange" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold">Spolehlivost</h2>
                        <article className="text-justify w-[250px]">
                            Striktně dodržujeme všechny termíny a to, na čem jsme se domluvili se zákazníkem.
                        </article>
                    </div>
                </div>



                <div className="flex gap-4">
                    <div>
                        <FontAwesomeIcon icon={faClockRotateLeft} className="w-10 h-10 text-custom-orange" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold">Spolehlivost</h2>
                        <article className="text-justify w-[250px]">
                            Striktně dodržujeme všechny termíny a to, na čem jsme se domluvili se zákazníkem.
                        </article>
                    </div>
                </div>


                <div className="flex gap-4">
                    <div>
                        <FontAwesomeIcon icon={faClockRotateLeft} className="w-10 h-10 text-custom-orange" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold">Spolehlivost</h2>
                        <article className="text-justify w-[250px]">
                            Striktně dodržujeme všechny termíny a to, na čem jsme se domluvili se zákazníkem.
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Identity