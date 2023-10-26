import { Component } from "react"
import { Route, Routes } from "react-router-dom"
import AppContent from "./components/AppContent"
import Home from "./components/Home"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      componentToShow: "login"
    }
  }

  render(){
    return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AppContent />} />
      </Routes>
    )
  }
}


export default App
