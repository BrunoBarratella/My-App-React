import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home"
import Empresa from "./components/pages/Empresa"
import Contato from "./components/pages/Contato"



function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/empresa" element={<Empresa />} /> 
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  )
}

export default App
