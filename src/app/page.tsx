
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero-Section/Hero";
import Image from "next/image";


const WebPage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      
      <section className="images">
      <Image src="/Image/shoes 5.jpg" alt="ladies shoes" width={412.6} height={412}/>
      <Image src="/Image/shoes 6.jpg" alt="ladies shoes" width={412.6} height={412}/>
      <Image src="/Image/shoes 8.jpg" alt="ladies shoes" width={412.6} height={412}/>
      </section>
      <Footer/>
      
    </div>
  );
    
}

export default WebPage;
