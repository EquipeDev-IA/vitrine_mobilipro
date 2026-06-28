/**
 * Mobili - Endpoint Google Apps Script pour le formulaire de contact.
 *
 * Installation :
 * 1. Crée un Google Sheet (ex. "Mobili - Contacts").
 * 2. Menu Extensions > Apps Script.
 * 3. Colle ce fichier dans Code.gs (remplace le contenu par défaut).
 * 4. (Optionnel) Change SHEET_NAME ci-dessous si tu veux un onglet précis.
 * 5. (Optionnel) Change SHARED_SECRET pour un petit token anti-spam,
 *    et mets la même valeur dans .env (VITE_SHEETS_TOKEN).
 * 6. Déploie : Déployer > Nouveau déploiement > Type "Application Web".
 *    - Exécuter en tant que : Moi
 *    - Qui a accès : Tout le monde
 * 7. Copie l'URL générée (https://script.google.com/macros/s/.../exec)
 *    et mets-la dans .env -> VITE_SHEETS_ENDPOINT.
 *
 * À chaque modification du script, refais "Déployer > Gérer les déploiements"
 * puis "Modifier" et "Nouvelle version".
 */

const SHEET_NAME = 'Contacts';
const SHARED_SECRET = ''; // laisser vide pour désactiver le token

const HEADERS = [
  'Date',
  'Prénom',
  'Nom',
  'Email',
  'Entreprise',
  'Objet',
  'Taille de flotte',
  'Message',
  'User-Agent',
  'Page'
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: 'empty_body' });
    }

    const data = JSON.parse(e.postData.contents);

    if (SHARED_SECRET && data.token !== SHARED_SECRET) {
      return jsonResponse({ ok: false, error: 'unauthorized' });
    }

    const sheet = getOrCreateSheet_();

    sheet.appendRow([
      new Date(),
      data.firstname || '',
      data.lastname || '',
      data.email || '',
      data.company || '',
      data.subject || '',
      data.fleet || '',
      data.message || '',
      data.userAgent || '',
      data.page || ''
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: 'mobili-contact' });
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
