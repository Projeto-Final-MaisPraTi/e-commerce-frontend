import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
// Inicializar o Storage
const storage = getStorage(app);
// const analytics = getAnalytics(app);

const authenticateUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuário autenticado:", user);
    return user; // Retorna o usuário autenticado
  } catch (error) {
    console.error("Erro ao autenticar:", error.message);
    return null; // Retorna nulo em caso de erro
  }
};

const email = import.meta.env.VITE_TEST_EMAIL; // Substitua pelo seu e-mail
const password = import.meta.env.VITE_TEST_PASSWORD; // Substitua pela sua senha
authenticateUser(email, password);

export { storage };
