import { ComponentExperience } from './ComponentExperience'
import './experience.css'
import A3Sport from '../../assets/screenshotA3.png'
import regalitosNao from '../../assets/regalitosNao.png'

function Experience() {
  return (
    <div className="experience">
        <div className="title">
            <h3>Experiencia</h3>

        </div>
        <section className="sectionExperience">
            <ComponentExperience title="Front-End Developer" name="A3 Sport" date="Junio 2023 - Agosto 2023" li1="Maquetación y armado de la aplicación web." li2="Creación de funcionalidades requeridas para la app." li3="Diseño responsive y estilos." li4="Manejo de versiones." github="https://github.com/RamaOtero/A3SportProyecto" img={A3Sport} deploy="https://a3-sport-proyecto.vercel.app/" />
            <ComponentExperience title="Front-End Developer" name="RegalitosNao" date="Septiembre 2022" li1="Maquetación, prototipado y armado." li2="Diseño responsive y estilos." li3="Participación de proyecto real, CoderHouse." li4="Manejo de versiones." github="https://github.com/RamaOtero/Proyecto-RegalitosNao" img={regalitosNao} deploy="https://proyecto-regalitos-nao-ramaotero.vercel.app/" />
        </section>
    </div>
  )
}

export default Experience