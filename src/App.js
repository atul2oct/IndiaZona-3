import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./Page/Error";
import Navbar from "./component/Navbar/Navbar";
import SellerPage from "./Page/SellerPage";


function App() {
  
  return (
    <main>
    
    
    <Routes>
    
      <Route path='/' element={<Navbar/>}>
        {/* Route for return */}
        <Route path='/dashboard/sellers' element={<SellerPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
      
    </main>
  );
}

export default App;
