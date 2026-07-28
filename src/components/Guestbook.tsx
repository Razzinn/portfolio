import { useState, useEffect, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import './Guestbook.css';

interface GuestbookMessage {
  id: number;
  name: string;
  text: string;
  createdAt: string;
}

interface FieldErrors {
  name?: string;
  text?: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

function Guestbook() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/messages`)
      .then(r => r.ok ? r.json() : [])
      .catch(() => [])
      .then(data => { setMessages(data); setLoadingMessages(false); });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text }),
      });
      if (res.status === 400) {
        const errors = await res.json();
        setFieldErrors(errors);
      } else if (res.ok) {
        const newMsg = await res.json();
        setMessages(prev => [newMsg, ...prev.slice(0, 9)]);
        setName('');
        setText('');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch {
      // errore di rete, ignora silenziosamente
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="guestbook" className="guestbook-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          💬 Guestbook
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Lascia un messaggio — rispondo a tutti!
        </motion.p>

        <motion.div
          className="guestbook-layout"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <form className="guestbook-form" onSubmit={handleSubmit} noValidate>
            <div className="guestbook-field">
              <label htmlFor="gb-name">Nome</label>
              <input
                id="gb-name"
                type="text"
                placeholder="Il tuo nome"
                value={name}
                onChange={e => setName(e.target.value)}
                maxLength={100}
                disabled={submitting}
              />
              {fieldErrors.name && <span className="guestbook-error">{fieldErrors.name}</span>}
            </div>
            <div className="guestbook-field">
              <label htmlFor="gb-text">Messaggio</label>
              <textarea
                id="gb-text"
                placeholder="Scrivi qualcosa..."
                rows={4}
                value={text}
                onChange={e => setText(e.target.value)}
                maxLength={500}
                disabled={submitting}
              />
              {fieldErrors.text && <span className="guestbook-error">{fieldErrors.text}</span>}
              <span className="guestbook-counter">{text.length}/500</span>
            </div>
            <motion.button
              type="submit"
              className="guestbook-submit"
              disabled={submitting}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {submitting ? 'Invio…' : 'Invia Messaggio'}
            </motion.button>
            {submitted && (
              <motion.p
                className="guestbook-success"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Messaggio inviato!
              </motion.p>
            )}
          </form>

          <div className="guestbook-messages">
            {loadingMessages ? (
              <p className="guestbook-loading">Caricamento messaggi…</p>
            ) : messages.length === 0 ? (
              <p className="guestbook-empty">Nessun messaggio ancora. Sii il primo! 👋</p>
            ) : (
              messages.map(msg => (
                <motion.div
                  key={msg.id}
                  className="guestbook-message"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="guestbook-message-header">
                    <strong>{msg.name}</strong>
                    <span className="guestbook-date">
                      {new Date(msg.createdAt).toLocaleDateString('it-IT', {
                        day: '2-digit', month: 'short', year: 'numeric'
                      })}
                    </span>
                  </div>
                  <p>{msg.text}</p>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Guestbook;
