import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  connectAuthEmulator 
} from "firebase/auth";
import { 
  getFirestore, 
  connectFirestoreEmulator 
} from "firebase/firestore";

// Configuración para pruebas (emuladores)
const firebaseTestConfig = {
  apiKey: "fake-api-key",
  authDomain: "localhost", 
  projectId: "leakplanting", // Usa tu verdadero projectId
  storageBucket: "fake-storage-bucket",
  messagingSenderId: "fake-messaging-sender-id",
  appId: "fake-app-id"
};

const app = initializeApp(firebaseTestConfig);

export const auth = getAuth(app);
// Conectar Auth al emulador
connectAuthEmulator(auth, "http://localhost:9099");

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const db = getFirestore(app);
// Conectar Firestore al emulador
connectFirestoreEmulator(db, "localhost", 8080);

// Tests unitarios
describe('Firebase Initialization Tests', () => {
  it('should initialize Firebase auth', () => {
    expect(auth).toBeDefined();
    expect(auth).toBeInstanceOf(getAuth().constructor);
  });

  it('should initialize Firestore db', () => {
    expect(db).toBeDefined();
    expect(db).toBeInstanceOf(getFirestore().constructor);
  });

  it('should initialize Google Auth Provider with custom parameters', () => {
    expect(googleProvider).toBeDefined();
    expect(googleProvider.getCustomParameters()).toEqual({ prompt: 'select_account' });
  });

  it('should connect to Firebase Auth emulator', () => {
    const authUrl = auth.config.apiEndpoint; // Verifica si la URL del emulador está configurada
    expect(authUrl).toBe('http://localhost:9099'); 
  });

  it('should connect to Firestore emulator', () => {
    const firestoreHost = db._delegate.host; // Verifica la configuración del emulador
    expect(firestoreHost).toContain('localhost');
    expect(firestoreHost).toContain('8080');
  });
});
