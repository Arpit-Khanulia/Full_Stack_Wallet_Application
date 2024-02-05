import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginScreen from "./screen/LoginScreen"
import RegisterScreen from "./screen/RegisterScreen"
import HomeScreen from "./screen/HomeScreen"
import Payment from "./Components/Payment"
import TransitionHistory from "./screen/TransitionHistory"
import ViewBalance from "./screen/ViewBalance"



const App = () => {


  return (
    <BrowserRouter>

      <Routes>
          <Route path="/login"  element={<LoginScreen/> } />
          <Route path="/register"  element={<RegisterScreen/> } />
          <Route path="/" element = {<HomeScreen/>}>
              <Route path="/pay" element={<Payment/>} /> 
              <Route path="/viewbalance" element={<ViewBalance/>} /> 
              <Route path="transitionhistory/:tquery" element={<TransitionHistory/>} /> 
          </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App