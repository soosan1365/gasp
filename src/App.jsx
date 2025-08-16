import gsap from "gsap";
import { ScrollTrigger,splitText } from "gsap/dist/ScrollTrigger.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
 gsap.registerPlugin(ScrollTrigger,splitText);

const App = () => {
    return (
       <main>
<Navbar/>
           <Hero/>
           <div className="h-dvh bg-black"/>
       </main>
    )
}
export default App
