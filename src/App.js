import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Pages/Shared/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Service from './Components/Pages/Service/Service';
import Page404 from './Components/Pages/NotFound/Page404';
import ServiceOfferDetails from './Components/Pages/ServiceOfferDetails/ServiceOfferDetails';
import BookAppointment from './Components/Pages/BookAppointment/BookAppointment';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './ContextProvider/AuthProvider';


function App() {
  return (
    <div className="App">
      
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/offerservices/:servicename">
          <ServiceOfferDetails></ServiceOfferDetails>
        </Route>
        <Route path="/bookappointment">
          <BookAppointment></BookAppointment>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="*">
          <Page404></Page404>
        </Route>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
