import './footer.css'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import instagram from '../../assets/icons/instagram.png'
import behance from '../../assets/icons/behance.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import gmail from '../../assets/icons/gmail.png'
function Footer() {
  return (
    <div className="footer">
        <a href="https://github.com/RamaOtero" target="_blank" rel="noreferrer"><img  src={github} alt="github" /></a>
        <a href="mailto:ramirootero98@gmail.com" target="_blank" rel="noreferrer" ><img  src={gmail} alt="gmail" /></a>
        <a href="https://www.linkedin.com/in/rama-otero-frontend/" target="_blank" rel="noreferrer"><img  src={linkedin} alt="linkedin" /></a>
        <a href="https://www.instagram.com/rama_otero" target="_blank" rel="noreferrer"><img  src={instagram} alt="instagram" /></a>
        <a href="https://www.behance.net/ramirootero1" target="_blank" rel="noreferrer"><img  src={behance} alt="behance" /></a>
        <a href="https://wa.me/+5492214958365" target="_blank" rel="noreferrer"><img  src={whatsapp} alt="whatsapp" /></a>
    </div>
  )
}

export default Footer