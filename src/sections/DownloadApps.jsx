// Mettez à jour ces URLs avec les vrais liens de vos applications
const PLAY_STORE_URL = '#'; // ex: https://play.google.com/store/apps/details?id=fr.mobili.app
const APP_STORE_URL = '#';  // ex: https://apps.apple.com/fr/app/mobili/id000000000

export default function DownloadApps() {
  return (
    <section aria-labelledby="download-title">
      <div className="wrap">
        <div className="center">
          <div className="tag fade-in">
            <span className="tag-dot" aria-hidden="true" />
            Téléchargement
          </div>
          <h2 id="download-title" className="fade-up">
            Mobili dans votre <span className="gradient-text">poche</span>
          </h2>
          <p className="sub fade-up d1">
            Téléchargez l'application mobile et pilotez votre flotte où que
            vous soyez. Disponible sur iOS et Android.
          </p>
        </div>

        <div className="download-grid">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="download-card glass fade-up"
            aria-label="Télécharger Mobili sur Google Play"
          >
            <div className="download-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#00E676"/>
                <path d="m16.81 8.288 2.49 1.435c1.34.773 1.34 2.71 0 3.483l-2.49 1.435L14.255 12l2.555-3.712z" fill="#FFB800"/>
                <path d="M3.609 1.814 14.255 12l-10.646 10.186a1 1 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92z" fill="#60A5FA" opacity=".35"/>
                <path d="m13.792 12 2.018-2.018L5.164.93a1 1 0 0 0-.555-.156c-.347 0-.66.18-.84.473L13.792 12z" fill="#34A853"/>
                <path d="M13.792 12 3.769 22.753c.18.293.493.473.84.473.196 0 .392-.052.555-.156l10.646-9.052L13.792 12z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="download-text">
              <span className="download-label">Disponible sur</span>
              <span className="download-store">Google Play</span>
            </div>
          </a>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="download-card glass fade-up d1"
            aria-label="Télécharger Mobili sur l'App Store"
          >
            <div className="download-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#F5F5F5">
                <path d="M17.05 12.04c-.03-3.04 2.49-4.5 2.6-4.57-1.42-2.07-3.62-2.36-4.4-2.39-1.87-.19-3.65 1.1-4.6 1.1-.96 0-2.42-1.07-3.98-1.04-2.05.03-3.94 1.19-5 3.03-2.13 3.7-.55 9.18 1.53 12.18 1.02 1.47 2.23 3.12 3.81 3.06 1.54-.06 2.12-.99 3.97-.99 1.85 0 2.38.99 3.99.96 1.65-.03 2.69-1.49 3.7-2.97 1.17-1.7 1.65-3.35 1.68-3.44-.04-.02-3.22-1.23-3.25-4.91zM14.32 4.39c.85-1.03 1.42-2.46 1.26-3.89-1.22.05-2.7.81-3.58 1.84-.79.91-1.48 2.37-1.29 3.77 1.36.11 2.75-.69 3.61-1.72z"/>
              </svg>
            </div>
            <div className="download-text">
              <span className="download-label">Télécharger sur</span>
              <span className="download-store">App Store</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
