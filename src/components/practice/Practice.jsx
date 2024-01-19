import './practice.css'
import PracticeSquare from './PracticeSquare.jsx'
function Practice() {
  return (
    <div className="practice">
        <div className="title">
            <h3>Practice</h3>
        </div>
        <section className="practiceSquare">
            <PracticeSquare sass={false} jsr={true} title="ReactJs CoderHouse" deploy="https://reactjs-coderhouse-three.vercel.app/" github="https://github.com/RamaOtero/reactJsCoderFinal" info="Entrega final para la aprobación del curso ReactJs en Coder House. Ecommerce, uso de hooks, manejo de base de datos, firestore, etc." />
            <PracticeSquare sass={false} jsr={true} title="Ta Te Ti Practice" deploy="https://ta-te-ti-sepia.vercel.app/" github="https://github.com/RamaOtero/taTeTi" info="Practica de ReactJS, uso de hooks useState, useEffect, creación de componentes, etc." />
            <PracticeSquare sass={true} jsr={false} title="Desarrollo Web CoderHouse" deploy="https://fixtechlp.vercel.app/" github="https://github.com/RamaOtero/DesarrolloWeb-CoderHouse" info="Entrega final para la aprobación del curso Desarrollo Web en Coder House. Página web destinada a un emprendimiento propio (opcional)" />
            <PracticeSquare sass={false} jsr={false} title="JavaScript CoderHouse" deploy="https://js-coder-house-sand.vercel.app/" github="https://github.com/RamaOtero/JS-CoderHouse" info="Entrega final para la aprobación del curso JavaScript en Coder House. Login, tienda, local storage, api, etc." />
            <PracticeSquare sass={false} jsr={true} title="Twitter Component" deploy="https://ta-te-ti-sepia.vercel.app/" github="https://github.com/RamaOtero/taTeTi" info="Practica de ReactJS, uso de hook useState, etc." />
        </section>
    </div>
  )
}

export default Practice