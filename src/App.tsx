
import Aboutpage from "./pages/Aboutpage/Aboutpage"
import Homepage from "./pages/Homepage/Homepage"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Aboutpage />} />
      </Routes>
    </>
  )
}

export default App