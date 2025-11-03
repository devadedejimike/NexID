import Features from "./assets/Features";
import Home from "./assets/Home";
import How from "./assets/How";
import Navbar from "./assets/Navbar";
import ProfileCard from "./assets/ProfileCard";

const App = () => {
    return (
        <div>
           <Navbar />
           <Home />
           <ProfileCard />
           <How />
           <Features />          
        </div>
    );
};

export default App;
