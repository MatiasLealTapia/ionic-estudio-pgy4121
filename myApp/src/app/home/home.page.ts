import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {
  }

  navegar(){
    let navigationExtras: NavigationExtras = {
      state: {user: "matias"}
      };
      this.router.navigate(['/pagina2'],navigationExtras);
  }
}
