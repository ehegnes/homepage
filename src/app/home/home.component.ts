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
      name: 'C / C++',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/731px-The_C_Programming_Language_logo.svg.png',
      link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
      name: 'Haskell',
      logo: 'https://wiki.haskell.org/wikiupload/4/4a/HaskellLogoStyPreview-1.png',
      link: 'https://haskell.org/',
    },
    {
      name: 'Rust',
      logo: 'https://www.rust-lang.org/logos/rust-logo-128x128-blk-v2.png',
      link: 'https://www.rust-lang.org/',
    },
    {
      name: 'Fortran',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Fortran_acs_cover.jpeg',
      link: 'https://en.wikipedia.org/wiki/Fortran',
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
    {
      name: 'Typescript',
      logo: 'https://s.gravatar.com/avatar/3e2b342616822f8eabc9dd393840db4a?size=496&default=retro',
      link: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Python',
      logo: 'https://www.python.org/static/favicon.ico',
      link: 'https://www.python.org/',
    },
    {
      name: 'MATLAB',
      logo: 'https://www.mathworks.com/favicon.ico',
      link: 'https://www.mathworks.com/products/matlab.html',
    },
  ]

  constructor() { }

  nav(s: string) {
    window.location.href = s;
  }

  ngOnInit() {
  }

}
