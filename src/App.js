import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menubar from "./components/Menubar/Menubar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyOrders from "./components/MyOrders/MyOrders";
import Services from "./components/Services/Services";
import Booking from "./components/Booking/Booking";
import AddServices from "./components/AddServices/AddServices";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
