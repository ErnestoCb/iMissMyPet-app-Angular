import { Injectable, NgZone } from '@angular/core';
import { User } from "./services/User";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; //guardar los datos del ususario logeado !!!!importante

  constructor(
    public afs: AngularFirestore, //inyectar el servicio de firestore
    public afAuth: AngularFireAuth, //inyectar el servicio de authentication de firebase
    public router: Router,
    public ngZone: NgZone //NgZone service to remove outside scope warning
  ) { 
    //guardamos el data del usuario cuando se logeo y dejarlo nullo al deslogearse
    this.afAuth.authState.subscribe(user =>{
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
   }

   //logearse con email/password
   SignIn(email, password) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     .then((result) => {
       this.ngZone.run(() => {
         this.router.navigate(['main']);
       });
       this.SetUserData(result.user);
     }).catch((error) => {
       window.alert(error.message)
     })
   }
   //registrarse con email/password
   SignUp(email, password) {
     return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
     .then((result) => {
       //lamar la funcion de verificarMail cuando un nuevo usuario se registra y retorna promise
       this.SendVerificationMail();
       this.SetUserData(result.user);
     }).catch((error) => {
       window.alert(error.message)
     })
   }
   //enviar correo de verificacion cuando un usuario se registra
   SendVerificationMail(){
     return this.afAuth.auth.currentUser.sendEmailVerification()
     .then(() =>{
       this.router.navigate(['verificar']);
     })
   }
   //resetear password olvidada
   ForgotPassword(passwordResetEmail){
     return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
     .then(()=>{
       window.alert('Se ha enviado un correo con el cambio de contraseña');
     }).catch((error)=>{
       window.alert(error)
     })
   }
   //Devuelve true cuando el user esta logeado y email verificado
   get isLoggedIn(): boolean{
     const user = JSON.parse(localStorage.get('user'));
     return (user !== null && user.emailVerified !== false) ? true : false;
   }
   //ingresar con google
   GoogleAuth(){
     return this.AuthLogin(new auth.GoogleAuthProvider());
   }
   //logica de auth para correr los providers
   AuthLogin(provider){
     return this.afAuth.auth.signInWithPopup(provider)
     .then((result)=>{
       this.ngZone.run(()=>{
         this.router.navigate(['main']);
       })
       this.SetUserData(result.user);
     }).catch((error)=>{
       window.alert(error)
     })
   }
   //seteando el user data cuando ingresa con username/password
   //registro con uusername/password y social auth provider in firestore
   //database usando el angularfirestore + angular firestore document service
   SetUserData(user){
     const userRef: AngularFirestoreDocument<any> = this.afs.doc('users/${user.uid}');
     const userData: User = {
       uid: user.uid,
       email: user.email,
       displayName: user.displayName,
       photoUrl: user.photoUrl,
       emailVerified: user.emailVerified
     }
     return userRef.set(userData, {
       merge: true
     })
   }
   //deslogearse
   SignOut() {
     return this.afAuth.auth.signOut().then(() => {
       localStorage.removeItem('user');
       this.router.navigate(['registro']);
     })
   }

}
