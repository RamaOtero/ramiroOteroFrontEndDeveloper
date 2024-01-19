import foto from '../../assets/perfilLinkedin.jpg'
import './header.css'
function Header() {
  return (
    <main className="header">
        <img className="perfilFoto" src={foto} alt="fotoPerfil" />
        <div className='header-info'>
            <h1>Ramiro Otero</h1>
            <h3>Front End Developer</h3>
            <h5>System engineer in process, graphic designer as a hobby.</h5>
            <button className="bttnCv"> Download Resume </button>
        </div>
    </main>
  )
}

export default Header