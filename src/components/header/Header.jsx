import foto from '../../assets/perfilLinkedin.jpg'
import cvDownload from '../../assets/CvRamiroOteroFront.pdf'
import './header.css'
function Header() {
  return (
    <main className="header">
        <img className="perfilFoto" src={foto} alt="fotoPerfil" />
        <div className='header-info'>
            <h1>Ramiro Otero</h1>
            <h3>Front End Developer</h3>
            <h5>Ingenierio en sistemas in process, diseñador gráfico como hobby.</h5>
            <a href={cvDownload} download="CvRamiroOteroFrontEnd.pdf">
            <button className="bttnCv"> Descargar CV </button>
            </a>
        </div>
    </main>
  )
}

export default Header