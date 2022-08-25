import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController, AlertController  } from '@ionic/angular';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  cbgNombre:string="";
  cbgApellido:string="";

  infoAdicional = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required]),
    nivEducacion: new FormControl(''),
    fechaNac: new FormControl(''),
  });

  dato:any;
  constructor(private activeroute: ActivatedRoute, private router: Router, private menu: MenuController, private alertController: AlertController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dato = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.dato);
      }
    })
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ionViewWillLeave() {
    this.menu.close('custom');
  }

  ngOnInit() {
  }

  guardarDatos(){
    console.log(this.infoAdicional.value);
  }

  limpiarDatos(){
    this.cbgNombre = "";
    this.cbgApellido = "";
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      subHeader: '',
      message: 'Tu nombre es '+this.cbgNombre+' '+this.cbgApellido,
      buttons: ['Si'],
    });

    await alert.present();
  }

}
