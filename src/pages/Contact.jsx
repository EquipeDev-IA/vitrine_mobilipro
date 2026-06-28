import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal.js';

const EMPTY = {
  firstname: '',
  lastname: '',
  email: '',
  company: '',
  subject: '',
  fleet: '',
  message: ''
};

const ENDPOINT = import.meta.env.VITE_SHEETS_ENDPOINT;
const TOKEN = import.meta.env.VITE_SHEETS_TOKEN || '';

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSendError('');
    const required = ['firstname', 'lastname', 'email', 'subject', 'message'];
    const next = {};
    required.forEach((k) => {
      if (!form[k].trim()) next[k] = true;
    });
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setTimeout(() => setErrors({}), 2500);
      return;
    }

    if (!ENDPOINT) {
      setSendError("Endpoint non configuré (VITE_SHEETS_ENDPOINT manquant).");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        // text/plain évite le preflight CORS avec Apps Script
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          ...form,
          token: TOKEN,
          page: typeof window !== 'undefined' ? window.location.href : '',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
        })
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      setForm(EMPTY);
      setSent(true);
    } catch (err) {
      setSendError("Envoi impossible. Réessaie dans un instant ou écris-nous à contact@mobili.fr.");
      console.error('Contact submit error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldStyle = (k) =>
    errors[k]
      ? {
          borderColor: 'rgba(239,68,68,.6)',
          boxShadow: '0 0 0 3px rgba(239,68,68,.1)'
        }
      : undefined;

  return (
    <section style={{ paddingTop: 160, paddingBottom: 120 }}>
      <div className="wrap">
        <div className="center">
          <div className="tag fade-in">
            <span className="tag-dot" aria-hidden="true" />
            Contact
          </div>
          <h1 className="fade-up">
            Parlons de votre <span className="gradient-text">projet</span>
          </h1>
          <p className="sub fade-up d1" style={{ margin: '16px auto 0' }}>
            Notre équipe répond en moins de 2 heures ouvrées. Démo, devis,
            question technique — nous sommes là.
          </p>
        </div>

        <div className="contact-wrap">
          <div className="contact-info">
            <div className="c-item glass fade-up">
              <div className="c-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>
                  Contact@linvestisseurafricain.com
                </p>
              </div>
            </div>

            <div className="c-item glass fade-up d1">
              <div className="c-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.98-2H6.5a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z" />
                </svg>
              </div>
              <div>
                <h4>Téléphone</h4>
                <p>
                  +225 0554076173
                  <br />
                  Lun–Ven, 9h–18h
                </p>
              </div>
            </div>

            <div className="c-item glass fade-up d2">
              <div className="c-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Siège social</h4>
                <p>
                  Rte d'Abatta, Abidjan
                  <br />
                  La Villa des Investisseurs Africains
                </p>
              </div>
            </div>

            <div className="mini-faq glass fade-up d3">
              <h4>Questions fréquentes</h4>
              <div className="faq-item">
                <strong>Combien de temps dure l'essai ?</strong>
                <p>14 jours complets, sans carte bancaire ni engagement.</p>
              </div>
              <div className="faq-item">
                <strong>Puis-je migrer mes données existantes ?</strong>
                <p>Oui, import CSV et API disponibles. Assistance migration gratuite.</p>
              </div>
              <div className="faq-item">
                <strong>Y a-t-il un engagement minimum ?</strong>
                <p>Non. Mensuel sans engagement ou annuel avec −20%.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card glass fade-up d1">
            <div className="tag" style={{ marginBottom: 24 }}>
              <span className="tag-dot" aria-hidden="true" />
              Envoyer un message
            </div>

            {!sent ? (
              <form onSubmit={onSubmit} noValidate aria-label="Formulaire de contact">
                <div className="form-row">
                  <div className="fg">
                    <label htmlFor="firstname">Prénom *</label>
                    <input
                      type="text" id="firstname" placeholder="Jean"
                      autoComplete="given-name" required
                      value={form.firstname} onChange={update('firstname')}
                      style={fieldStyle('firstname')}
                    />
                  </div>
                  <div className="fg">
                    <label htmlFor="lastname">Nom *</label>
                    <input
                      type="text" id="lastname" placeholder="Dupont"
                      autoComplete="family-name" required
                      value={form.lastname} onChange={update('lastname')}
                      style={fieldStyle('lastname')}
                    />
                  </div>
                </div>

                <div className="fg">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email" id="email" placeholder="jean@entreprise.fr"
                    autoComplete="email" required
                    value={form.email} onChange={update('email')}
                    style={fieldStyle('email')}
                  />
                </div>

                <div className="fg">
                  <label htmlFor="company">Entreprise</label>
                  <input
                    type="text" id="company" placeholder="Mon Entreprise SAS"
                    autoComplete="organization"
                    value={form.company} onChange={update('company')}
                  />
                </div>

                <div className="fg">
                  <label htmlFor="subject">Objet *</label>
                  <select
                    id="subject" required
                    value={form.subject} onChange={update('subject')}
                    style={fieldStyle('subject')}
                  >
                    <option value="" disabled>Sélectionnez un sujet</option>
                    <option>Demander une démo</option>
                    <option>Démarrer un essai gratuit</option>
                    <option>Offre Entreprise / Devis</option>
                    <option>Support technique</option>
                    <option>Partenariat</option>
                    <option>Autre question</option>
                  </select>
                </div>

                <div className="fg">
                  <label htmlFor="fleet">Taille de flotte</label>
                  <select id="fleet" value={form.fleet} onChange={update('fleet')}>
                    <option value="" disabled>Choisissez une tranche</option>
                    <option>1 à 3 véhicules</option>
                    <option>4 à 10 véhicules</option>
                    <option>11 à 50 véhicules</option>
                    <option>51 à 200 véhicules</option>
                    <option>Plus de 200 véhicules</option>
                  </select>
                </div>

                <div className="fg">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" placeholder="Décrivez votre besoin..." required
                    value={form.message} onChange={update('message')}
                    style={fieldStyle('message')}
                  />
                </div>

                {sendError && (
                  <div
                    role="alert"
                    style={{
                      marginBottom: 12,
                      padding: '10px 12px',
                      borderRadius: 10,
                      border: '1px solid rgba(239,68,68,.4)',
                      background: 'rgba(239,68,68,.08)',
                      color: '#fca5a5',
                      fontSize: '.9rem'
                    }}
                  >
                    {sendError}
                  </div>
                )}

                <button
                  type="submit"
                  className="form-submit"
                  disabled={submitting}
                  style={submitting ? { background: 'rgba(0,230,118,.5)' } : undefined}
                >
                  {submitting ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin .8s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="success-msg" role="status" aria-live="polite">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" style={{ margin: '0 auto 10px', display: 'block' }} aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: 6 }}>
                  Message envoyé !
                </strong>
                Notre équipe vous répondra dans les 2 heures ouvrées.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
