interface NavbarProps {
    contact?: boolean
}


const Navbar = ({ contact }: NavbarProps) => {

    return (
        <nav className="flex justify-between padding z-50">
            <div>
                <img src="https://i.pinimg.com/736x/05/bb/5d/05bb5d3cc73dd567808d76517b598987.jpg"
                    className="object-contain w-full h-10 cursor-pointer"
                    alt="logo"
                />
            </div>
            <div>
                <ul className="flex items-center gap-8 cursor-pointer">
                    <li className={`${contact ? 'text-white' : 'text-black'}font-bold md:text-sm lg:text-xl`}>Producty</li>
                    <li className={`${contact ? 'text-white' : 'text-black'}font-bold md:text-sm lg:text-xl`}>O nas</li>
                    <li className={`${contact ? 'text-white' : 'text-black'}font-bold md:text-sm lg:text-xl`}>Reference</li>
                    <li className={`${contact ? 'text-white' : 'text-black'}font-bold md:text-sm lg:text-xl`}>Identita</li>
                    <li className={`${contact ? 'text-white' : 'text-black'}font-bold md:text-sm lg:text-xl`}>Kontakt</li>
                </ul>
            </div>
            <div>
                <button className={`${contact ? 'text-white' : 'bg-white hover:bg-custom-orange text-black rounded-md shadow-2xl'}  cursor-pointer px-6 py-2 text-center md:text-sm lg:text-xl font-medium`}>
                    Akni Nabdica
                </button>
            </div>
        </nav >
    )
}

export default Navbar