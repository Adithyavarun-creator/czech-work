import { Link } from "react-router-dom"

const Contact = () => {


    return (
        <section className="bg-[#FCB900] flex justify-between items-center padding">
            <div>
                <h2 className="md:text-3xl lg:text-5xl text-black font-medium">
                    Hledáte spolehlivého partnera <br /> pro Vaší realizaci?
                </h2>
            </div>
            <div>
                <Link
                    to="/contact"
                    className="px-8 py-4 bg-black text-center md:text-xl lg:text-2xl text-white rounded-xl cursor-pointer hover:bg-custom-orange">
                    Přejít na kontakty
                </Link>
            </div>
        </section>
    )
}

export default Contact