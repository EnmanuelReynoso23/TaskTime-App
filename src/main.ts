import { platformNativeScriptDynamic } from '@nativescript/angular';
import { firebase } from '@nativescript/firebase-core';
import { AppModule } from './app/app.module';

firebase().initializeApp()
  .then(() => console.log("Firebase initialized"))
  .catch(error => console.log("Error initializing Firebase", error));

platformNativeScriptDynamic().bootstrapModule(AppModule);