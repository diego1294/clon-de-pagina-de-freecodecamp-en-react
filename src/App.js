import './App.css';
import Testimonio from './componentes/Testimonio';
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
       <Testimonio
       nombre='Shawn Wang'
       pais='Singapur'
       imagen='shaw'
       cargo='Ingeniero de software'
       empresa='Amazon'
       testimonio='Da miedo cambiar de carrera.Solo gane la confianza de que podia programar trabajando en los cientos de horas gratuitas en FreeCodeCamp.En un año tenia un trabajo de seis cifras como ingeniero de software.FreeCodeCamp cambio mi vida.' />
        <Testimonio
       nombre='Sara Chima'
       pais='Nigeria'
       imagen='sara'
       cargo='Ingeniero de software'
       empresa='ChatDesk'
       testimonio='FreeCodeCamp es la puerta de entrada a mi carrera como desarrolladora de software.El plan de estudios bien estructurado llevo mi conocimiento de codificacion en un nivel de principiante total a un nivel muy seguro.Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increible' />
        <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='ema'
        cargo='ingeniera de software'
        empresa='Spotify'
        testimonio=  'Siempre me ha costado aprender javascript.Tome muchos cursos,pero el curso de freeCodeCamp fue el que se quedo.Estudiar JavaScript,asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotity' />
      </div>
      </div>
  );
}

export default App;
