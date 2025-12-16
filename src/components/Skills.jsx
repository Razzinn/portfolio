import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import './Skills.css';

const categoryVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Competenze Tecniche
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Tecnologie e strumenti che utilizzo per creare esperienze web moderne
        </motion.p>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              <h3 className="category-title">{skillCategory.category}</h3>
              <motion.div
                className="skills-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
              >
                {skillCategory.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="skill-item"
                    variants={skillItemVariants}
                    whileHover={{ x: 6, scale: 1.02 }}
                  >
                    <span className="skill-icon">✓</span>
                    <span className="skill-name">{tech}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
