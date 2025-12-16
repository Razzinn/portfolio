import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const contactItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Contattami
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Interessato a collaborare? Sono sempre aperto a nuove opportunità e progetti interessanti
        </motion.p>
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          >
            <motion.div className="contact-item" variants={contactItemVariants} whileHover={{ x: 6, scale: 1.02 }}>
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </motion.div>
            <motion.div className="contact-item" variants={contactItemVariants} whileHover={{ x: 6, scale: 1.02 }}>
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3>GitHub</h3>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  {personalInfo.github.replace('https://github.com/', '@')}
                </a>
              </div>
            </motion.div>
            <motion.div className="contact-item" variants={contactItemVariants} whileHover={{ x: 6, scale: 1.02 }}>
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <h3>LinkedIn</h3>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  Collegati su LinkedIn
                </a>
              </div>
            </motion.div>
            <motion.div className="contact-item" variants={contactItemVariants} whileHover={{ x: 6, scale: 1.02 }}>
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3>Località</h3>
                <p>{personalInfo.location}</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="contact-cta"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3>Cerco Opportunità</h3>
            <p>
              Sono attualmente alla ricerca di posizioni da Frontend Developer. 
              Se hai un'opportunità interessante o vuoi semplicemente fare una chiacchierata, 
              non esitare a contattarmi!
            </p>
            <motion.a 
              href={`mailto:${personalInfo.email}`} 
              className="btn-contact"
              whileHover={{ scale: 1.06, y: -4, boxShadow: '0 14px 30px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.96 }}
            >
              Invia un'Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
