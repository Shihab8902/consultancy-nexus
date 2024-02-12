import { useState } from "react"
import About from "./Components/About/About"
import CallToAction from "./Components/CTA/CallToAction"
import CountDown from "./Components/Count down/CountDown"
import Hero from "./Components/Hero/Hero"
import SlideUpForm from "./Components/SlideUp form/SlideUpForm"
import WhyShould from "./Components/Why Should/WhyShould"


function App() {

  const [showForm, setShowForm] = useState(false);

  return <section>

    <Hero showForm={showForm} setShowForm={setShowForm} />
    <About />
    <WhyShould />
    <CountDown showForm={showForm} setShowForm={setShowForm} />
    <CallToAction showForm={showForm} setShowForm={setShowForm} />
    <SlideUpForm showForm={showForm} setShowForm={setShowForm} />


  </section>

}

export default App
