import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBanner from "./components/herobanner/HeroBanner";
import OurService from "./components/ourService/OurService";
import Clinic from "./components/clinic/Clinic";
import Specialist from "./components/specialist/Specialist";
import Blog from "./components/blog/Blog";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <OurService />
      <Clinic />
      <Specialist />
      <Blog />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
