import { Component, OnInit } from '@angular/core';
//import { SidenavService } from './sidenav.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './topnav.component.html'
})
export class TopNavComponent implements OnInit {
  //
  // _showBtn = false;
  //
  constructor(
    //private _sidenavSvc: SidenavService,
    private _router: Router) { }

  ngOnInit(): void {
   // this._router.events.subscribe(this.onRouteChange.bind(this));
  }
  //
  // /**
  //  * Callback for route change events that
  //  * will hide the nav button if necessary.
  //  *
  //  * @param {RouterEvent} event
  //  * @memberof SideNavComponent
  //  */
  // onRouteChange(event: RouterEvent) {
  //   if (event instanceof NavigationEnd) {
  //     const url = event.urlAfterRedirects;
  //     this._showBtn = !url.endsWith('/login') && url.indexOf('activation') === -1;
  //   }
  // }
  //
  // /**
  //  * View callback for toggling the sidenav.
  //  *
  //  * @memberof TopNavComponent
  //  */
  // toggleNav() {
  //   this._sidenavSvc.toggle();
  // }

}
