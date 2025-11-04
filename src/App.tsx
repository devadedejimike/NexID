import Create from "./assets/Create";
import Features from "./assets/Features";
import Footer from "./assets/Footer";
import Home from "./assets/Home";
import How from "./assets/How";
import Navbar from "./assets/Navbar";
import ProfileCard from "./assets/ProfileCard";
import Why from "./assets/Why";

const App = () => {
    return (
        <div>
           <Navbar />
           <Home />
           <ProfileCard />
           <Features /> 
           <Why/>
           <How /> 
           <Create/>   
           <Footer />    
        </div>
    );
};

export default App;
