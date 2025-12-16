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
            <h3>Frontend Developer</h3>
            <p>
              Mi chiamo <strong>{personalInfo.name}</strong> e sono un Frontend Developer con 
              un forte entusiasmo per la creazione di interfacce web moderne e funzionali.
            </p>
            <p>
              Ho conseguito il diploma di Frontend Developer tramite <strong>Develhope</strong>, 
              dove ho acquisito competenze solide in sviluppo web e mobile, concentrandomi 
              su tecnologie come React, JavaScript, HTML5 e CSS3.
            </p>
            <p>
              Sono attualmente alla ricerca di opportunità nel campo dello sviluppo software, 
              dove poter applicare le mie competenze e continuare a crescere professionalmente. 
              Mi appassiona risolvere problemi complessi e trasformare design creativi in 
              esperienze utente eccezionali.
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
                  <p>Diploma Develhope - Frontend Developer</p>
                </div>
              </motion.div>
              <motion.div className="highlight-item" variants={highlightVariants} whileHover={{ y: -5, scale: 1.03 }}>
                <span className="highlight-icon">💼</span>
                <div>
                  <h4>Obiettivo</h4>
                  <p>Posizione da Frontend Developer</p>
                </div>
              </motion.div>
              <motion.div className="highlight-item" variants={highlightVariants} whileHover={{ y: -5, scale: 1.03 }}>
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Focus</h4>
                  <p>Sviluppo Web & Mobile</p>
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
