import "./App.css";
import { Route, Routes} from "react-router-dom";
import Login from "./pages/Authentication/Login";
import User from "./pages/Dashboards/indexUserDashboard";
import Admin from "./pages/Dashboards/indexDashboard";


function App() {

  return (
    <div >
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
    </div>
  );
}

export default App;

