import Header from "./header/Header.jsx"
import Experience from './experience/Experience.jsx'
import Practice from './practice/Practice.jsx'
import Footer from './footer/Footer.jsx'
import '../App.css'
function Main() {
  return (
     <main className="mainApp">
        <Header />
        <Experience />
        <Practice />
        <Footer />
    </main>       
  )
}

export default Main