import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import AdminRegister from "./screens/AdminRegister";
import Login from "./screens/Login";
import AdminLogin from "./screens/AdminLogin";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import SignInForm from "./components/Form/Register";
import AdminDashboard from './screens/AdminDashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={SignInForm} />
        <Route path="/login" exact component={Login} />
        <Route path="/adminLogin" exact component={AdminLogin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/AdminDashboard" component={AdminDashboard} />

      </BrowserRouter>
    </div>
  );
}

export default App;
