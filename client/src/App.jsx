import { BrowserRouter as Router } from "react-router-dom"
import Routing from "./components/routing/Routing"

const App = () => {
    return(
      <Router>
        <div className="app">
            <Routing />
        </div>
      </Router>
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/login" element={<AppContent />} />
      // </Routes>
    )
}

export default App
