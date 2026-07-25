import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const highlightVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Chi Sono
        </motion.h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3>Full Stack Developer</h3>
            <p>
              Mi chiamo <strong>{personalInfo.name}</strong> e sono uno sviluppatore web con
              competenze solide nel mondo Java enterprise e nei principali framework frontend moderni.
            </p>
            <p>
              Ho completato un percorso intensivo <strong>Formatemp</strong>,
              248 ore di formazione in presenza focalizzato su architetture end‑to‑end:
              Java + Spring Boot (MVC, Data JPA), OOP, Stream API, REST API,
              pattern Entity/DTO/Service/Controller e integrazione con <strong>MySQL</strong>.
            </p>
            <p>
              Sul fronte frontend ho maturato competenze su <strong>React</strong> con un corso di 6 mesi presso Develhope
              (componenti funzionali, Hooks, stato, API REST, ES6+) e <strong>Angular</strong>
              (componenti, servizi, HttpClient, routing), realizzando UI responsive e
              integrazioni complete con backend Spring.
            </p>
            <p>
              Provengo da ambienti lavorativi dinamici che mi hanno trasmesso disciplina,
              capacità di team working e problem solving rapido — qualità che applico
              quotidianamente nello sviluppo software.
            </p>
            <motion.div 
              className="about-highlights"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
            >
              <motion.div className="highlight-item" variants={highlightVariants} whileHover={{ y: -5, scale: 1.03 }}>
                <span className="highlight-icon">🎓</span>
                <div>
                  <h4>Formazione</h4>
                  <p>Academy Formatemp 248h – Java & Full Stack</p>
                </div>
              </motion.div>
              <motion.div className="highlight-item" variants={highlightVariants} whileHover={{ y: -5, scale: 1.03 }}>
                <span className="highlight-icon">💼</span>
                <div>
                  <h4>Obiettivo</h4>
                  <p>Junior Java / Full Stack / Frontend Developer</p>
                </div>
              </motion.div>
              <motion.div className="highlight-item" variants={highlightVariants} whileHover={{ y: -5, scale: 1.03 }}>
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Focus</h4>
                  <p>Java Enterprise · React · Angular</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
