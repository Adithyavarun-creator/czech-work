import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { identityDatas } from "../datas";



const Identity = () => {
    return (
        <section className="flex flex-col gap-14 padding">

            <div>
                <h2 className="text-black text-5xl md:text-6xl font-medium select-text">Firemní identita</h2>
            </div>

            <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-14 lg:gap-16">

                {
                    identityDatas.map((data) => (
                        <div className="flex gap-4" key={data.id}>
                            <div>
                                <FontAwesomeIcon icon={data.icon} className="w-10 h-10 text-custom-orange" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl font-semibold">{data.title}</h2>
                                <article className="text-justify w-full md:w-[250px]">
                                    {data.description}
                                </article>
                            </div>
                        </div>
                    ))
                }



            </div>
        </section>
    )
}

export default Identity