
const Navbar = () => {
    return (
        <nav className="flex justify-between padding z-50">
            <div>
                <img src="https://i.pinimg.com/736x/05/bb/5d/05bb5d3cc73dd567808d76517b598987.jpg"
                    className="object-contain w-full h-10 cursor-pointer"
                    alt="logo"
                />
            </div>
            <div className="flex items-center gap-8 cursor-pointer">
                <span className="text-white font-semibold md:text-sm lg:text-xl">Producty</span>
                <span className="text-white font-semibold md:text-sm lg:text-xl">O nas</span>
                <span className="text-white font-semibold md:text-sm lg:text-xl">Reference</span>
                <span className="text-white font-semibold md:text-sm lg:text-xl">Identita</span>
                <span className="text-white font-semibold md:text-sm lg:text-xl">Kontakt</span>
            </div>
            <div>
                <button className="bg-white shadow-2xl px-6 py-2 rounded-md text-center md:text-sm lg:text-xl font-medium">
                    Akni Nabdica
                </button>
            </div>
        </nav>
    )
}

export default Navbar