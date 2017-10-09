import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { fadeAnimation } from './fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeAnimation ],
})
export class AppComponent implements OnInit {
  formattedRoute = '';
  isDark = true;

  constructor(
    private router: Router,
  ) {
    router.events.subscribe((url: any) => {
      this.formattedRoute = decodeURI(router.url.substring(1));
    });
  }

  nav(s: string) {
    window.location.href = s;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
  }

  ngOnInit() {
  }
}
