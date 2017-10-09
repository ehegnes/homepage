import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  proficiencies = [
    {
      name: 'C',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/731px-The_C_Programming_Language_logo.svg.png',
      link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
      name: 'Haskell',
      logo: 'https://wiki.haskell.org/wikiupload/4/4a/HaskellLogoStyPreview-1.png',
      link: 'https://haskell.org/',
    },
    {
      name: 'Angular 2+',
      logo: 'https://angular.io/assets/images/logos/angular/angular.png',
      link: 'https://angular.io/',
    },
    {
      name: 'Node.js',
      logo: 'https://nodejs.org/static/images/logo-hexagon.png',
      link: 'https://nodejs.org/',
    },
  ]

  constructor() { }

  nav(s: string) {
    window.location.href = s;
  }

  ngOnInit() {
  }

}
