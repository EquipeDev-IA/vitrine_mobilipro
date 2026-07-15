import useScrollReveal from '../hooks/useScrollReveal.js';

// Politique de confidentialité — Mobili PRO
// Dernière mise à jour : 15 juillet 2026
// Base : données réellement traitées par l'application (authentification par
// téléphone/PIN, gestion de flotte et données financières, géolocalisation des
// véhicules, photos, notifications). Hébergement Google Firebase.

const EDITEUR = {
  nom: 'Les Investisseurs Africains',
  email: 'Contact@linvestisseurafricain.com',
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
          L’application <strong>Mobili PRO</strong> (« l’Application ») est éditée par{' '}
          <strong>{EDITEUR.nom}</strong>, responsable du traitement de vos données
          personnelles au sens de la réglementation applicable en matière de
          protection des données.
        </p>
        <p style={{ marginTop: 12 }}>
          Adresse : {EDITEUR.adresse}<br />
          Email : <a href={`mailto:${EDITEUR.email}`}>{EDITEUR.email}</a><br />
          Téléphone : {EDITEUR.tel}
        </p>
        <p style={{ marginTop: 12 }}>
          La présente politique explique quelles données nous collectons, pourquoi,
          comment nous les protégeons et quels sont vos droits. Elle s’applique à
          l’utilisation de l’Application Mobili PRO destinée aux propriétaires de
          véhicules et à la gestion de leur flotte.
        </p>
      </>
    )
  },
  {
    id: 'donnees',
    title: '2. Les données que nous collectons',
    body: (
      <>
        <p>Nous collectons uniquement les données nécessaires au fonctionnement du service :</p>
        <ul>
          <li>
            <strong>Données d’identification et de connexion :</strong> numéro de
            téléphone et code PIN, utilisés pour vous authentifier et sécuriser
            l’accès à votre compte.
          </li>
          <li>
            <strong>Données de profil :</strong> nom, prénom et, le cas échéant,
            photo de profil que vous choisissez d’ajouter.
          </li>
          <li>
            <strong>Données de flotte et données financières :</strong> véhicules
            rattachés à votre compte, recettes, paiements, prélèvements, assurances,
            virements et justificatifs associés, nécessaires au suivi de votre activité.
          </li>
          <li>
            <strong>Géolocalisation des véhicules :</strong> positions et trajets des
            véhicules de votre flotte, transmis par les dispositifs de suivi installés
            sur ces véhicules (voir section 4).
          </li>
          <li>
            <strong>Photos et médias :</strong> images que vous téléversez volontairement
            (justificatifs de virement, pièces jointes à une réclamation, photo de profil).
          </li>
          <li>
            <strong>Données techniques :</strong> informations relatives à l’appareil et
            journaux de fonctionnement, utilisés pour assurer la sécurité et la stabilité
            du service.
          </li>
        </ul>
      </>
    )
  },
  {
    id: 'finalites',
    title: '3. Comment nous utilisons vos données',
    body: (
      <>
        <p>Vos données sont traitées pour les finalités suivantes :</p>
        <ul>
          <li>vous authentifier et sécuriser votre compte ;</li>
          <li>afficher l’état de votre flotte, vos recettes et vos indicateurs financiers ;</li>
          <li>vous permettre de suivre la position de vos véhicules ;</li>
          <li>traiter vos virements, réclamations et échanges avec le support ;</li>
          <li>vous informer via des notifications liées à votre activité ;</li>
          <li>assurer la sécurité, prévenir la fraude et améliorer le service.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Nous ne réalisons aucune publicité ciblée et ne prenons aucune décision
          entièrement automatisée produisant des effets juridiques à votre égard.
        </p>
      </>
    )
  },
  {
    id: 'geoloc',
    title: '4. Géolocalisation des véhicules',
    body: (
      <>
        <p>
          L’Application affiche la position des <strong>véhicules de votre flotte</strong>,
          et non celle de votre téléphone. Ces données proviennent des dispositifs de
          suivi installés sur les véhicules. Elles servent exclusivement à vous fournir
          la visibilité opérationnelle sur votre activité (véhicules actifs, à l’arrêt,
          hors ligne) et ne sont pas utilisées à des fins publicitaires ni partagées avec
          des tiers à ces fins.
        </p>
      </>
    )
  },
  {
    id: 'photos',
    title: '5. Photos et appareil photo',
    body: (
      <>
        <p>
          L’Application peut vous demander l’accès à votre appareil photo ou à votre
          photothèque, uniquement lorsque vous choisissez d’ajouter une image (photo de
          profil, justificatif de virement, pièce jointe à une réclamation). Aucune photo
          n’est consultée ou téléversée sans votre action. Vous pouvez refuser ou révoquer
          cet accès à tout moment dans les réglages de votre téléphone.
        </p>
      </>
    )
  },
  {
    id: 'notifications',
    title: '6. Notifications',
    body: (
      <>
        <p>
          Avec votre autorisation, nous pouvons vous envoyer des notifications relatives à
          votre activité (réponses à vos réclamations, alertes). Vous pouvez désactiver les
          notifications à tout moment dans les réglages de votre téléphone. À cet effet, un
          identifiant technique d’appareil peut être conservé afin d’acheminer ces messages.
        </p>
      </>
    )
  },
  {
    id: 'partage',
    title: '7. Partage de vos données',
    body: (
      <>
        <p>
          <strong>Nous ne vendons jamais vos données personnelles.</strong> Vos données ne
          sont partagées qu’avec :
        </p>
        <ul>
          <li>
            <strong>nos prestataires techniques d’hébergement et d’infrastructure</strong>{' '}
            (notamment Google Firebase / Google Cloud), qui traitent les données pour notre
            compte et selon nos instructions, afin de faire fonctionner le service ;
          </li>
          <li>
            <strong>les autorités compétentes</strong>, uniquement lorsque la loi l’exige.
          </li>
        </ul>
      </>
    )
  },
  {
    id: 'securite',
    title: '8. Hébergement et sécurité',
    body: (
      <>
        <p>
          Vos données sont hébergées sur l’infrastructure sécurisée de Google Firebase /
          Google Cloud. Les échanges entre l’Application et nos serveurs sont chiffrés
          (HTTPS). Nous mettons en œuvre des mesures techniques et organisationnelles
          raisonnables pour protéger vos données contre tout accès, altération ou
          divulgation non autorisés. L’accès aux données est restreint aux personnes
          habilitées.
        </p>
      </>
    )
  },
  {
    id: 'conservation',
    title: '9. Durée de conservation',
    body: (
      <>
        <p>
          Nous conservons vos données aussi longtemps que votre compte est actif et que
          cela est nécessaire aux finalités décrites ci-dessus, puis pour la durée requise
          par nos obligations légales et comptables. Au-delà, elles sont supprimées ou
          anonymisées.
        </p>
      </>
    )
  },
  {
    id: 'droits',
    title: '10. Vos droits',
    body: (
      <>
        <p>Vous disposez des droits suivants sur vos données personnelles :</p>
        <ul>
          <li>droit d’accès et de rectification ;</li>
          <li>droit à l’effacement de vos données ;</li>
          <li>droit d’opposition et de limitation du traitement ;</li>
          <li>droit à la portabilité de vos données.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Pour exercer ces droits, écrivez-nous à{' '}
          <a href={`mailto:${EDITEUR.email}`}>{EDITEUR.email}</a>. Nous répondons dans les
          meilleurs délais.
        </p>
      </>
    )
  },
  {
    id: 'suppression',
    title: '11. Suppression de votre compte',
    body: (
      <>
        <p>
          Vous pouvez à tout moment demander la suppression de votre compte et des données
          personnelles associées en nous contactant à{' '}
          <a href={`mailto:${EDITEUR.email}`}>{EDITEUR.email}</a>. Après vérification de
          votre identité, votre compte et vos données personnelles seront supprimés, sous
          réserve des données que nous devons conserver pour des raisons légales.
        </p>
      </>
    )
  },
  {
    id: 'mineurs',
    title: '12. Mineurs',
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
    id: 'modifications',
    title: '13. Modifications de cette politique',
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
    title: '14. Nous contacter',
    body: (
      <>
        <p>
          Pour toute question relative à cette politique ou au traitement de vos données :
        </p>
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

export default function Confidentialite() {
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
            Politique de <span className="gradient-text">confidentialité</span>
          </h1>
          <p className="sub fade-up d1" style={{ margin: '16px auto 0' }}>
            Dernière mise à jour : 15 juillet 2026
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
