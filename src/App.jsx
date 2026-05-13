import {
  MapPin,
  Phone,
  Clock,
  Dumbbell,
  Users,
  Trophy,
  Star,
  MessageCircle,
  AtSign,
} from 'lucide-react'

import logo from './assets/logo.jpg'
import equipo from './assets/equipo.jpg'
import aday from './assets/aday.jpg'
import dani from './assets/dani.jpg'
import adrian from './assets/adrian.jpg'

import gym1 from './assets/gym-1.jpg'
import gym2 from './assets/gym-2.jpg'
import gym3 from './assets/gym-3.jpg'
import gym4 from './assets/gym-4.jpg'
import gym5 from './assets/gym-5.jpg'
import sala from './assets/sala.jpg'

function App() {
  const whatsapp = 'https://wa.me/34649698704'

  const trainers = [
    {
      name: 'Aday',
      image: aday,
      title: 'Bodybuilding, boxeo y preparación física',
      text: 'Especialista en bodybuilding con más de 20 años de experiencia. Ex boxeador amateur e instructor de boxeo. Campeón de Canarias Jóvenes Promesas IFBB y 5º clasificado OPEN Internacional WABBA.',
    },
    {
      name: 'Dani',
      image: dani,
      title: 'Fuerza, resistencia y rendimiento',
      text: 'Entrenador desde 2006, especialista en trail, atletismo y rendimiento. Más de 125 carreras, 16 ultras finalizadas y pódiums en distancias de 42K, 21K, 10K y 5K.',
    },
    {
      name: 'Adrián',
      image: adrian,
      title: 'Monitor deportivo titulado',
      text: 'El más joven del equipo. Aporta energía, cercanía y compromiso para ayudarte a mejorar cada día con una atención directa y motivadora.',
    },
  ]

  const prices = [
    ['Cuota mensual +25 años', '39,40€'],
    ['Cuota mensual -25 años', '34,40€'],
    ['Cuota familiar +25 años', '34,40€'],
    ['Cuota familiar -25 años', '29,40€'],
    ['Cuota trimestral +25 años', '100€'],
    ['Cuota trimestral -25 años', '85€'],
    ['Entrada de día', '5€'],
  ]

  const classes = [
    ['Boxeo', 'Lunes a jueves', '20:00 - 21:30'],
    ['Muay Thai', 'Lunes, miércoles y viernes', '17:00 - 18:30'],
    ['Body Perfect Funcional', 'Lunes, miércoles y viernes', '08:30 - 09:30'],
    ['C. Training', 'Martes y jueves', '17:30 - 18:30'],
    ['Zumba', 'Lunes y miércoles', '20:30 - 21:30'],
    ['Danzas Urbanas', 'Martes y jueves', '18:30 - 21:00'],
  ]

  const gallery = [gym1, gym2, gym3, gym4, gym5, sala]

  return (
    <main>
      <header className="navbar">
        <div className="brand">
          <img src={logo} alt="Logo Gimnasio Body Perfect" />
          <span>Body Perfect</span>
        </div>

        <nav>
          <a href="#equipo">Equipo</a>
          <a href="#precios">Precios</a>
          <a href="#clases">Clases</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Gimnasio en La Laguna, Tenerife</p>
          <h1>Entrena fuerte. Mejora cada día. Hazlo en Body Perfect.</h1>
          <p>
            Un gimnasio cercano, completo y profesional para personas que quieren
            mejorar su físico, su salud y su rendimiento con el apoyo de un equipo
            con experiencia real.
          </p>

          <div className="hero-actions">
            <a href={whatsapp} className="btn primary" target="_blank">
              <MessageCircle size={20} />
              Reservar por WhatsApp
            </a>
            <a href="#precios" className="btn secondary">
              Ver cuotas
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>20+</strong>
              <span>años de experiencia</span>
            </div>
            <div>
              <strong>125+</strong>
              <span>carreras disputadas</span>
            </div>
            <div>
              <strong>3</strong>
              <span>entrenadores</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={equipo} alt="Equipo de entrenadores de Body Perfect" />
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">Centro deportivo completo</p>
          <h2>Musculación, clases dirigidas, boxeo, funcional y asesoramiento.</h2>
        </div>

        <div className="features">
          <article>
            <Dumbbell />
            <h3>Sala de musculación</h3>
            <p>Zona equipada para fuerza, hipertrofia y entrenamiento general.</p>
          </article>

          <article>
            <Users />
            <h3>Clases dirigidas</h3>
            <p>Boxeo, Muay Thai, funcional, zumba, danzas urbanas y más.</p>
          </article>

          <article>
            <Trophy />
            <h3>Equipo experto</h3>
            <p>Entrenadores con experiencia en competición, resistencia y rendimiento.</p>
          </article>
        </div>
      </section>

      <section id="equipo" className="section dark">
        <p className="eyebrow">Nuestro equipo</p>
        <h2>Entrena acompañado por profesionales.</h2>

        <div className="trainer-grid">
          {trainers.map((trainer) => (
            <article className="trainer-card" key={trainer.name}>
              <img src={trainer.image} alt={`Entrenador ${trainer.name}`} />
              <div>
                <h3>{trainer.name}</h3>
                <h4>{trainer.title}</h4>
                <p>{trainer.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="precios" className="section">
        <p className="eyebrow">Cuotas</p>
        <h2>Planes claros para entrenar a tu ritmo.</h2>

        <div className="price-grid">
          {prices.map(([name, price]) => (
            <article className="price-card" key={name}>
              <span>{name}</span>
              <strong>{price}</strong>
            </article>
          ))}
        </div>

        <div className="bonus-card">
          <h3>Bonos mensuales</h3>
          <p>8 sesiones: <strong>24,40€</strong></p>
          <p>4 sesiones: <strong>14,40€</strong></p>
        </div>
      </section>

      <section id="clases" className="section classes-section">
        <p className="eyebrow">Clases</p>
        <h2>Actividades para mejorar fuerza, resistencia y condición física.</h2>

        <div className="classes-grid">
          {classes.map(([name, days, time]) => (
            <article className="class-card" key={name}>
              <h3>{name}</h3>
              <p>{days}</p>
              <strong>{time}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-section">
        <p className="eyebrow">Instalaciones</p>
        <h2>Un espacio preparado para entrenar cómodo y con intensidad.</h2>

        <div className="gallery">
          {gallery.map((image, index) => (
            <img src={image} alt={`Instalaciones Body Perfect ${index + 1}`} key={index} />
          ))}
        </div>
      </section>

      <section className="section nutrition">
        <div>
          <p className="eyebrow">Servicio adicional</p>
          <h2>Asesoramiento nutricional deportivo.</h2>
          <p>
            Mejora tu salud y tus resultados con asesoramiento nutricional enfocado
            en metabolismo, microbiota intestinal y patologías digestivas.
          </p>
        </div>

        <a href={whatsapp} className="btn primary" target="_blank">
          Reservar cita
        </a>
      </section>

      <section id="contacto" className="section contact">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Empieza hoy en Body Perfect.</h2>
          <p>
            Escríbenos por WhatsApp o visítanos en La Laguna, Tenerife.
          </p>
        </div>

        <div className="contact-card">
          <p>
            <MapPin /> La Laguna, Tenerife
          </p>
          <p>
            <Phone /> 649 698 704
          </p>
          <p>
            <Clock /> Consulta horarios en recepción
          </p>
          <p>
            <AtSign /> @bodyperfecttenerife
          </p>

          <a href={whatsapp} className="btn primary" target="_blank">
            Contactar ahora
          </a>
        </div>
      </section>

      <footer>
        <img src={logo} alt="Logo Body Perfect" />
        <p>© 2026 Gimnasio Body Perfect. La Laguna, Tenerife.</p>
      </footer>
    </main>
  )
}

export default App