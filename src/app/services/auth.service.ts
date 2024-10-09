import { Injectable } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any = null;

  constructor() {
    this.initFirebase();
  }

  async initFirebase() {
    await firebase().initializeApp();
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await firebase().auth().signInWithEmailAndPassword(email, password);
      this.currentUser = userCredential.user;
      return this.currentUser;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async register(email: string, password: string): Promise<any> {
    try {
      const userCredential = await firebase().auth().createUserWithEmailAndPassword(email, password);
      this.currentUser = userCredential.user;
      return this.currentUser;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await firebase().auth().signOut();
      this.currentUser = null;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}