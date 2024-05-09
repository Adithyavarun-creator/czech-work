import Contact from "../../components/Contact"
import Fillings from "../../components/Fillings"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Identity from "../../components/Identity"
import Navbar from "../../components/Navbar"
import Reference from "../../components/Reference"

const Homepage = () => {
    return (
        <div className="flex flex-col relative">
            <Navbar />
            <Header />
            <Fillings />
            <Reference />
            <Identity />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage