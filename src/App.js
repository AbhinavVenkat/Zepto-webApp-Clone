import NavBar from "./Navbar/ZeptoNavBar";
import MotoBlock from "./MotoBlock/MotoBlock";
import CloudBg from "./CloudBackground/CloudBg";
import DeliveryScrolls from "./DeliveryScrolls/DeliveryScrolls";
import WorkingBlock from "./WorkBlock/WorkingBlock";
import CustomerRev from "./CustomerReviews/CustomerRev";
import FooterSection from "./FooterSection/FooterSection";

function App() {
  return (
    <div className="App">
        
        <NavBar/>
        <MotoBlock/>
        <CloudBg/>
        <DeliveryScrolls/>
        <WorkingBlock/>
        <CustomerRev/>
        <FooterSection/>
    </div>
  );
}

export default App;
