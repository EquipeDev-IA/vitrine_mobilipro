import useScrollReveal from '../hooks/useScrollReveal.js';

// Politique de confidentialité — Mobili SMS (application Android, Play Store)
// Dernière mise à jour : 7 août 2026
// Base : store/politique-confidentialite.md du dépôt Mobili-SMS.
// Données réellement traitées : SMS/MMS et contacts en local uniquement,
// jeton Firebase Cloud Messaging pour la passerelle, Crashlytics/Analytics.

const EDITEUR = {
  nom: 'Les Investisseurs Africains',
  email: 'support@linvestisseurafricain.com',
  tel: '+225 05 03 57 87 81',
  adresse: "Rte d'Abatta, La Villa des Investisseurs Africains, Abidjan, Côte d'Ivoire"
};

const SECTIONS = [
  {
    id: 'editeur',
    title: '1. Qui sommes-nous',
    body: (
      <>
        <p>
          L’application <strong>Mobili SMS</strong> (« l’Application ») est une
          messagerie SMS éditée par <strong>{EDITEUR.nom}</strong> dans le cadre de la
          plateforme de gestion de flotte Mobili. C’est un logiciel libre sous licence
          GPLv3, dérivé de Traccar SMS Gateway et de Fossify Messages.
        </p>
        <p style={{ marginTop: 12 }}>
          Adresse : {EDITEUR.adresse}<br />
          Email : <a href={`mailto:${EDITEUR.email}`}>{EDITEUR.email}</a><br />
          Téléphone : {EDITEUR.tel}
        </p>
      </>
    )
  },
  {
    id: 'messages',
    title: '2. Vos messages restent sur votre téléphone',
    body: (
      <>
        <p>
          Les SMS et MMS que vous envoyez et recevez sont stockés localement, dans la
          base de messages d’Android. <strong>Ils ne sont transmis à aucun serveur</strong>,
          ni à Mobili ni à quiconque. Nous ne lisons pas, ne collectons pas et ne
          conservons pas le contenu de vos conversations.
        </p>
      </>
    )
  },
  {
    id: 'contacts',
    title: '3. Vos contacts restent sur votre téléphone',
    body: (
      <>
        <p>
          L’Application lit votre répertoire uniquement pour afficher les noms à côté
          des numéros dans vos conversations. Aucune donnée de contact n’est envoyée
          hors de l’appareil.
        </p>
      </>
    )
  },
  {
    id: 'passerelle',
    title: '4. La passerelle de flotte',
    body: (
      <>
        <p>
          Si vous liez l’Application à un compte gestionnaire Mobili, la plateforme peut
          demander à votre téléphone d’envoyer des commandes SMS aux balises GPS des
          véhicules de votre propre flotte. Concrètement :
        </p>
        <ul style={{ marginTop: 12 }}>
          <li>
            votre téléphone reçoit une instruction via Firebase Cloud Messaging (service
            de Google) contenant le numéro de la balise et le texte de la commande ;
          </li>
          <li>l’Application envoie ce SMS depuis votre carte SIM ;</li>
          <li>
            aucun contenu de vos conversations personnelles n’est lu, collecté ni
            transmis dans ce processus.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Un identifiant technique (jeton d’appareil Firebase) est associé à votre compte
          gestionnaire pour permettre cet envoi. Il ne contient aucune donnée personnelle
          et peut être révoqué en désinstallant l’Application.
        </p>
      </>
    )
  },
  {
    id: 'donnees',
    title: '5. Données réellement collectées',
    body: (
      <>
        <ul>
          <li>
            <strong>Messages SMS / MMS</strong> — non collectés, traitement local
            uniquement.
          </li>
          <li>
            <strong>Contacts</strong> — non collectés, lecture locale uniquement.
          </li>
          <li>
            <strong>Position, photos, fichiers</strong> — non collectés.
          </li>
          <li>
            <strong>Identifiant d’appareil (jeton Firebase Cloud Messaging)</strong> —
            collecté, nécessaire au fonctionnement de la passerelle, jamais partagé.
          </li>
          <li>
            <strong>Rapports de plantage et diagnostics (Firebase Crashlytics)</strong> —
            collectés de façon anonyme, pour corriger les bogues.
          </li>
          <li>
            <strong>Statistiques d’utilisation de l’application (Firebase Analytics)</strong> —
            collectées de façon agrégée, pour mesurer la stabilité et l’usage.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Ces données sont transmises chiffrées (HTTPS/TLS). Aucune donnée n’est vendue
          ni partagée avec des tiers à des fins publicitaires.
        </p>
      </>
    )
  },
  {
    id: 'tiers',
    title: '6. Services tiers',
    body: (
      <>
        <p>
          L’Application intègre les services Firebase de Google : Cloud Messaging pour la
          passerelle, Crashlytics pour les rapports de plantage, Analytics pour les
          statistiques d’usage. La politique de confidentialité de Google s’applique à
          ces services :{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            policies.google.com/privacy
          </a>
          .
        </p>
      </>
    )
  },
  {
    id: 'publicite',
    title: '7. Publicité',
    body: (
      <>
        <p>
          Aucune. L’Application ne contient ni publicité ni traqueur publicitaire, et ne
          vend aucune donnée.
        </p>
      </>
    )
  },
  {
    id: 'permissions',
    title: '8. Permissions demandées',
    body: (
      <>
        <ul>
          <li>
            <strong>SMS</strong> — lire, envoyer et recevoir des messages : c’est une
            application de messagerie, et la fonction passerelle envoie les commandes aux
            balises de votre flotte.
          </li>
          <li>
            <strong>Contacts</strong> — afficher les noms dans les conversations.
          </li>
          <li>
            <strong>Notifications</strong> — vous avertir des messages reçus.
          </li>
          <li>
            <strong>Téléphone</strong> — identifier la carte SIM utilisée sur les
            appareils double SIM.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Chaque permission peut être refusée ou révoquée à tout moment dans les
          paramètres Android.
        </p>
      </>
    )
  },
  {
    id: 'suppression',
    title: '9. Conservation et suppression des données',
    body: (
      <>
        <p>
          Désinstaller l’Application supprime ses données locales et révoque le jeton
          d’appareil utilisé par la passerelle. Vos SMS restent dans la base de messages
          d’Android, gérée par le système.
        </p>
        <p style={{ marginTop: 12 }}>
          Pour délier votre téléphone de la plateforme Mobili, désinstallez l’Application
          ou contactez votre administrateur de flotte. Toute demande de suppression peut
          également être adressée à{' '}
          <a href={`mailto:${EDITEUR.email}`}>{EDITEUR.email}</a>.
        </p>
      </>
    )
  },
  {
    id: 'mineurs',
    title: '10. Mineurs',
    body: (
      <>
        <p>
          L’Application est destinée à des utilisateurs majeurs, dans un cadre
          professionnel. Elle n’est pas destinée aux mineurs et nous ne collectons pas
          sciemment de données concernant des mineurs.
        </p>
      </>
    )
  },
  {
    id: 'licence',
    title: '11. Logiciel libre',
    body: (
      <>
        <p>
          Mobili SMS est distribuée sous licence GPLv3. Toute personne qui reçoit
          l’Application peut en obtenir le code source, l’étudier et le modifier.
        </p>
      </>
    )
  },
  {
    id: 'modifications',
    title: '12. Modifications de cette politique',
    body: (
      <>
        <p>
          Nous pouvons faire évoluer la présente politique. En cas de changement
          important, nous vous en informerons par les moyens appropriés. La date de
          dernière mise à jour figure en haut de cette page.
        </p>
      </>
    )
  },
  {
    id: 'contact',
    title: '13. Nous contacter',
    body: (
      <>
        <p>Pour toute question relative à cette politique ou au traitement de vos données :</p>
        <p style={{ marginTop: 12 }}>
          <strong>{EDITEUR.nom}</strong><br />
          {EDITEUR.adresse}<br />
          Email : <a href={`mailto:${EDITEUR.email}`}>{EDITEUR.email}</a><br />
          Téléphone : {EDITEUR.tel}
        </p>
      </>
    )
  }
];

export default function ConfidentialiteSms() {
  useScrollReveal();

  return (
    <section style={{ paddingTop: 160, paddingBottom: 120 }}>
      <div className="wrap">
        <div className="center">
          <div className="tag fade-in">
            <span className="tag-dot" aria-hidden="true" />
            Confidentialité
          </div>
          <h1 className="fade-up">
            Mobili SMS — politique de <span className="gradient-text">confidentialité</span>
          </h1>
          <p className="sub fade-up d1" style={{ margin: '16px auto 0' }}>
            Dernière mise à jour : 7 août 2026
          </p>
        </div>

        <div
          className="legal-content"
          style={{ maxWidth: 820, margin: '56px auto 0' }}
        >
          {SECTIONS.map((s) => (
            <div
              key={s.id}
              className="glass fade-up"
              style={{ padding: '28px 28px', borderRadius: 18, marginBottom: 20 }}
            >
              <h2 style={{ fontSize: '1.25rem', marginBottom: 14 }}>{s.title}</h2>
              <div className="legal-body">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
