import { useState } from "react"

const Reference = () => {

    const [open, setOpen] = useState(false)

    return (
        <section className="relative h-[530px] md:h-[724px] bg-cover bg-no-repeat opacity-85 bg-[url('https://images.unsplash.com/photo-1706711129609-f9ce58db04fc?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        >

            {
                open &&
                <div className="px-8 py-12 flex flex-col gap-14 absolute right-0 left-36 bottom-10 z-30 md:z-0 md:top-40 md:right-[600px] w-1/2 md:w-1/4 h-[460px] bg-[#806c00] rounded-2xl">
                    <h2 className="text-white text-6xl">2016</h2>
                    <article className="text-white text-xs md:text-sm font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error pariatur optio eos fugiat, veritatis ut. Officia quod quaerat voluptates? Maxime!</article>
                    <button className="text-black text-center px-6 py-3 rounded-2xl bg-white w-min" onClick={() => setOpen(false)}>Prehled</button>
                </div>
            }

            <div className="flex flex-col gap-10 absolute right-0 p-10 md:px-40 md:py-40">
                <div className="flex justify-end">
                    <h2 className="text-white text-6xl">Reference</h2>
                </div>
                <div className="grid grid-cols-4 justify-center gap-4">
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span className="text-white cursor-pointer text-sm md:text-xl text-center"
                            onClick={() => setOpen(!open)}
                        >2020</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span className="text-white cursor-pointer text-sm md:text-xl text-center"
                            onClick={() => setOpen(!open)}
                        >2019</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer text-sm md:text-xl text-center">2018</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer text-sm md:text-xl text-center">2017</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer text-sm md:text-xl text-center">2016</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer text-sm md:text-xl text-center">2015</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer text-sm md:text-xl text-center">2014</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer text-sm md:text-xl text-center">2013</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer text-sm md:text-xl text-center">2012</span>
                    </div>
                    <div className="p-4 bg-[#473B1D] rounded-lg">
                        <span
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer text-sm md:text-xl text-center">2011</span>
                    </div>
                </div>
            </div>




        </section>
    )
}

export default Reference




/*

 

 {open && <div className="absolute top-0 left-0 flex justify-center w-1/4 h-[400px] bg-red-500">

            </div>}
*/