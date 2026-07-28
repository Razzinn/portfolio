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
                  <p>Academy Formatemp 248h – Java & Full Stack | Corso di formazione Frontend - Develhope</p>
                </div>
              </motion.div>
              <motion.div className="highlight-item" variants={highlightVariants} whileHover={{ y: -5, scale: 1.03 }}>
                <span className="highlight-icon">💼</span>
                <div>
                  <h4>Obiettivo</h4>
                  <p>Junior Java / Full Stack / Frontend Developer / Web Developer</p>
                </div>
              </motion.div>
              <motion.div className="highlight-item" variants={highlightVariants} whileHover={{ y: -5, scale: 1.03 }}>
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Focus</h4>
                  <p>Java Enterprise · React · Angular · Frammework Spring · Docker · MySQL</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="about-cv"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <a href="/CV_Ignat_Razvan_Mihai.pdf" className="btn-cv" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                Scarica CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
