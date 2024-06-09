const firebase_api_key = import.meta.env.VITE_FIREBASE_API_KEY;
const firebase_app_id = import.meta.env.VITE_FIREBASE_APP_ID;
const firebase_project_id = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const firebase_messaging_sender_id = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;


const emailjs_pubkey = import.meta.env.VITE_EMAILJS_PUBKEY;
const serviceKey = import.meta.env.VITE_EMAIL_JS_SERVICE;
const templateId = import.meta.env.VITE_EMAILJS_STARTUP_TEMP;
const emailReceiver = import.meta.env.VITE_EMAIL_RECEIVER


export { firebase_api_key, firebase_app_id, firebase_project_id, firebase_messaging_sender_id , emailReceiver, emailjs_pubkey, templateId, serviceKey}