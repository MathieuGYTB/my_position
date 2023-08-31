import * as Localization from 'expo-localization';
import { IntlMessageFormat } from 'intl-messageformat';

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
           message: "Au secour ! Je suis coincé à la position indiqué par le lien ci dessous. Cliquez sur le lien pour afficher ma position dans google maps et venez me secourir svp : ",
           rules: "Cette application utilise vos données de localisation pour le fonctionnement de l'application. Ces données ne sont ni stockées ni partagées par nous mêmes à des personnes tiers. Les données sont partagées par vous mêmes aux personnes de votre choix lorsque vous utilisez l'application."
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
           message: "Help ! I am stuck at the position indicated by the link below. Click on the link to display my position in google maps and come and help me please : ",
           rules: "This application uses your location data for the operation of the application. This data is neither stored nor shared by us with third parties. The data is shared by you yourself to the people of your choice when you use the application"
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
           message: "Ayuda ! Estoy atascado en la posición indicada en el siguiente enlace. Haz clic en el enlace para ver mi posición en google maps y ven a ayudarme por favor : ",
           rules: "Esta aplicación utiliza sus datos de ubicación para el funcionamiento de la aplicación. Estos datos no los almacenamos ni los compartimos con terceros. Usted mismo comparte los datos con las personas que elija cuando utiliza la aplicación."
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
          message: "Helfen ! Ich stecke an der im Link unten angegebenen Position fest. Klicken Sie auf den Link, um meine Position in Google Maps anzuzeigen und helfen Sie mir bitte : ",
          rules: "Diese Anwendung verwendet Ihre Standortdaten für den Betrieb der Anwendung. Diese Daten werden von uns weder gespeichert noch an Dritte weitergegeben. Die Daten werden von Ihnen selbst bei der Nutzung der Anwendung an die von Ihnen ausgewählten Personen weitergegeben"
        }
};


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

