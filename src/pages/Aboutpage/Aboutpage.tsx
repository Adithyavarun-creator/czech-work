import AboutHeader from "../../components/AboutHeader"
import ContactDetails from "../../components/ContactDetails"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const Aboutpage = () => {
    return (
        <>
            <div className="relative">
                <Navbar contact />
                <AboutHeader />
                <ContactDetails />
                <Footer />
            </div>
        </>
    )
}

export default Aboutpage