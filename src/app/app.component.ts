import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-crypto-rsa';
  isMenuOpen = false;

  routes = [
    {
      label: 'Criptografar',
      link: '/encrypt'
    },
    {
      label: 'Como funciona?',
      link: '/about/how-it-works'
    },
    {
      label: 'Sobre o projeto',
      link: '/about/us'
    }
  ]

  currentRoute = {
    label: '',
    link: ''
  };

  constructor(router:Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          // Hide progress spinner or progress bar
          let index = this.routes.findIndex(route => route.link == event.url);
          if(index != -1) {
            this.currentRoute = this.routes[index];          
          } else {
            this.currentRoute = {
              label: '',
              link: ''
            };
          }
      }
  });
  }
}
