
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'blog-web-app-38f6c.firebaseapp.com',
  projectId: 'blog-web-app-38f6c',
  storageBucket: 'blog-web-app-38f6c.appspot.com',
  messagingSenderId: '553638791769',
  appId: '1:553638791769:web:01332b36130fa7f6d8ff48',
};

export const app = initializeApp(firebaseConfig);
