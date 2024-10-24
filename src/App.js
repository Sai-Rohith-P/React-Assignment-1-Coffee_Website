import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar1 from './Components/Navbar1';
import About1 from './Components/About1';
import Services from './Components/Services';
import Offer from './Components/Offer';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <div className="BGImg"> 
          <Navbar1 />  
        <div className="cneterContent">
          <h3>We Have Been Serving</h3>
          <h1>Coffee</h1>
          <h4>* Since 1994 *</h4>
        </div>
      </div>
      <About1 />
      <Services />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
