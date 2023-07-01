import {BrowserRouter,Route,Routes}  from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ErrorPage from "./Pages/ErrorPage";
import Layout from "./components/Layout"
import Dashboard from "./Pages/Dashboard";
import Store from "./Pages/Store";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path = "contactus" element = {<ContactUs/>}/>
        <Route path = "aboutus" element = {<AboutUs/>}/>
        <Route path = "dashboard" element = {<Dashboard/>}/>
        <Route path = "store" element = {<Store/>}/>

        <Route path = "*" element = {<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
