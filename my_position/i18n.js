import * as Localization from 'expo-localization';
import { IntlMessageFormat } from 'intl-messageformat';

//object variable who stock the translations
const locales = {
  "fr-FR": {
           latitude: "latitude",
           longitude: "longitude",
           altitude: "altitude",
           addPosition: "Obtenir ma position",
           click : "Cliquez sur le bouton",
           sharePosition: "Partager ma position",
           home: "Accueil",
           rulesTitle: "Règles de confidentialité",
           permission: "la permission d'accès a été refusée",
           showForm: "afficher le formulaire de consentement",
           name: "nom",
           firstname: "prénom",
           validate: "valider",
           choices: "valider votre choix",
           alphanumeric: "Votre nom et prénom ne doivent contenir que des lettres",
           alert: "Votre nom et votre prénom doivent avoir au moins 1 caractère",
           message: "Au secour ! Je suis coincé à la position indiqué par le lien ci dessous. Cliquez sur le lien pour afficher ma position dans google maps et venez me secourir svp : ",
           rules: "Cette application utilise vos données de localisation pour le fonctionnement de l'application. Ces données ne sont ni stockées ni partagées par nous mêmes à des personnes tiers. Les données sont partagées par vous mêmes aux personnes de votre choix lorsque vous utilisez l'application. \n\nCette application demande votre consentement pour utiliser vos données à caractère personnel dans les cas suivants : \n\n1) Publicités et contenu personnalisés, mesure de performance des publicités et du contenu, données d’audience et développement de produit. \n2) Stocker et/ou accéder à des informations sur un terminal. \n\nVos données personnelles seront traitées et les informations de votre appareil (cookies, identifiants uniques et autres données de l'appareil) pourront être stockées, consultées et partagées avec des fournisseurs tiers, ou utilisées spécifiquement par ce site ou cette application. \n\nCertains fournisseurs peuvent traiter vos données personnelles sur la base d'un intérêt légitime, auquel vous pouvez vous opposer en gérant vos options ou retirer votre consentement en cliquant sur le bouton ci-dessous. \n\nAfin de respecter la loi sur la réglementation générale de la protection des données,  l'application demande et stock votre nom et prénom ainsi que le statut de votre consentement afin de pouvoir prouver à tout instant que vous avez consenti ou non."
        },
    "en-EN": {
           latitude: "latitude",
           longitude: "longitude",
           altitude: "altitude",
           addPosition: "Add my position",
           click: "Click on the button",
           sharePosition: "Share my position",
           home: "Home",
           rulesTitle: "Privacy rules",
           permission: "access permission has been denied",
           showForm: "show consent form",
           name: "name",
           firstname: "firstname",
           validate: "to validate",
           choices: "validate your choices",
           alphanumeric: "Your first and last name must only contain letters",
           alert: "Your first and last name must have at least 1 character",
           message: "Help ! I am stuck at the position indicated by the link below. Click on the link to display my position in google maps and come and help me please : ",
           rules: "This application uses your location data for the operation of the application. This data is neither stored nor shared by us with third parties. The data is shared by you yourself to the people of your choice when you use the application. \n\nThis application requests your consent to use your personal data in the following cases: \n\n1) Personalized ads and content, ad and content performance measurement, audience data and product development. \n2) Store and/or access information on a terminal. \n\nYour personal data will be processed and information from your device (cookies, unique identifiers, and other device data) may be stored by, accessed by and shared with third party vendors, or used specifically by this site or app. \n\nSome vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options or withdraw your consent by clicking on the button below. \n\nIn order to comply with the law on general data protection regulations, the application requests and stores your first and last name as well as the status of your consent in order to be able to prove at any time whether you have consented or not."
        },
    "es-ES": {
           latitude:"latitud",
           longitude:"longitud",
           altitude:"altitud",
           addPosition: "Obtener mi ubicación",
           click: "clic en el botón",
           sharePosition: "Compartir mi ubicación",
           home: "Inicio",
           rulesTitle: "Reglas de confidencialidad",
           permission: "Se ha denegado el permiso de acceso",
           showForm: "mostrar formulario de consentimiento",
           name: "nombre",
           firstname: "nombre de pila",
           validate: "validar",
           choices: "valida tu elección",
           alphanumeric: "Su nombre y apellido sólo deben contener letras",
           alert: "Su nombre y apellido deben tener al menos 1 carácter",
           message: "Ayuda ! Estoy atascado en la posición indicada en el siguiente enlace. Haz clic en el enlace para ver mi posición en google maps y ven a ayudarme por favor : ",
           rules: "Esta aplicación utiliza sus datos de ubicación para el funcionamiento de la aplicación. Estos datos no los almacenamos ni los compartimos con terceros. Usted mismo comparte los datos con las personas que elija cuando utiliza la aplicación. \n\nLa aplicación solicita su consentimiento para utilizar sus datos personales en los siguientes casos: \n\n1) Anuncios y contenido personalizados, medición del rendimiento de anuncios y contenidos, datos de audiencia y desarrollo de productos. \n2) Almacenar y/o acceder a información en un terminal. \n\nSus datos personales serán procesados y la información de su dispositivo (cookies, identificadores únicos y otros datos del dispositivo) podrá ser almacenada, accedida y compartida con proveedores externos, o utilizada específicamente por este sitio o aplicación. \n\nAlgunos proveedores pueden procesar sus datos personales sobre la base de un interés legítimo, a lo cual podrás oponerte gestionando tus opciones o retirar tu consentimiento haciendo clic en el botón a continuación. \n\nPara cumplir con la ley de normativa general de protección de datos, la aplicación solicita y almacena su nombre y apellidos así como el estado de su consentimiento para poder acreditar en cualquier momento si ha dado su consentimiento o no."
        },
    "de-DE": {
          latitude:"Breite",
          longitude:"Längengrad",
          altitude:"höhe",
          addPosition: "Holen Sie sich meine Position",
          click: "Klicken Sie auf die Schaltfläche",
          sharePosition: "Teile meinen Standort",
          home: "Startseite",
          rulesTitle: "Vertraulichkeitsregeln",
          permission: "Die Zugriffsberechtigung wurde verweigert",
          showForm: "Einverständniserklärung anzeigen",
          name: "name",
          firstname: "vorname",
          validate: "bestätigen",
          choices: "Bestätigen Sie Ihre Wahl",
          alphanumeric: "Ihr Vor- und Nachname dürfen nur Buchstaben enthalten",
          alert: "Ihr Vor- und Nachname müssen mindestens 1 Zeichen lang sein",
          message: "Helfen ! Ich stecke an der im Link unten angegebenen Position fest. Klicken Sie auf den Link, um meine Position in Google Maps anzuzeigen und helfen Sie mir bitte : ",
          rules: "Diese Anwendung verwendet Ihre Standortdaten für den Betrieb der Anwendung. Diese Daten werden von uns weder gespeichert noch an Dritte weitergegeben. Die Daten werden von Ihnen selbst bei der Nutzung der Anwendung an die von Ihnen ausgewählten Personen weitergegeben. \n\nDiese Anwendung bittet Sie in den folgenden Fällen um Ihre Einwilligung zur Nutzung Ihrer personenbezogenen Daten: \n\n1) Personalisierte Anzeigen und Inhalte, Messung der Anzeigen- und Inhaltsleistung, Zielgruppendaten und Produktentwicklung. \n2) Informationen auf einem Terminal speichern und/oder darauf zugreifen. \n\nIhre personenbezogenen Daten werden verarbeitet und Informationen von Ihrem Gerät (Cookies, eindeutige Kennungen und andere Gerätedaten) können von Drittanbietern gespeichert, abgerufen und an diese weitergegeben oder speziell von dieser Website oder App verwendet werden. \n\nEinige Anbieter verarbeiten Ihre personenbezogenen Daten möglicherweise auf der Grundlage eines berechtigten Interesses, dem Sie widersprechen können, dem können Sie über die Verwaltung Ihrer Optionen widersprechen oder Ihre Einwilligung widerrufen, indem Sie auf die Schaltfläche unten klicken. \n\nZur Einhaltung der Datenschutz-Grundverordnung erfragt und speichert die Anwendung Ihre Vor- und Nachnamen sowie den Status Ihrer Einwilligung, um jederzeit nachweisen zu können, ob Sie eingewilligt haben oder nicht."
        }
};

//function to translate
const i18n = (messageId, values) => {
  let locale = Localization.locale;
  if (!locales[locale]) {
      locale = 'en-EN'; // Fallback to English
    }

  const message = locales[locale][messageId];
  const formatter = new IntlMessageFormat(message, locale);
  return formatter.format(values);
};

export default i18n;

