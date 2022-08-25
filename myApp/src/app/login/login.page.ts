import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;
  passwordTypeInput  =  'password';
  usuario = new FormGroup({
    usrnme: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    contrasenna: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
  });
  
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  togglePasswordMode() {
    //cambiar tipo input
  this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
   //obtener el input
   const nativeEl = this.passwordEye.nativeElement.querySelector('input');
   //obtener el indice de la posición del texto actual en el input
   const inputSelection = nativeEl.selectionStart;
   //ejecuto el focus al input
   nativeEl.focus();
  //espero un milisegundo y actualizo la posición del indice del texto
   setTimeout(() => {
       nativeEl.setSelectionRange(inputSelection, inputSelection);
   }, 1);

  }

  guardarDatos(){
    console.log(this.usuario.value);
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value}
      };
      this.router.navigate(['/pagina2'],navigationExtras);
  }

}
