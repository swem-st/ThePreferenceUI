// import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { environment } from '../../../environments/environment';
// import { Router, RouterEvent, NavigationEnd } from '@angular/router';
// import { NavLink } from '../../models/nav_link';
// import { SidenavService } from './sidenav.service';
// import { SessionService } from '../../../shared/services/session.service';
// import { EmployeeProfile } from '../../models/domain/employee_profile';
// import { AuthService } from '../../auth/auth.service';
// import { SettingsService } from 'src/app/shared/services/settings.service';
// import { Observable } from 'rxjs';
//
// @Component({
//     selector: 'app-side-nav',
//     templateUrl: './sidenav.component.html'
// })
//
// export class SideNavComponent implements OnInit, AfterViewInit {
//     isPendingTransactionEnabled$: Observable<boolean>;
//
//     _version = `v-${environment.VERSION}`;
//     _employeeProfile = new EmployeeProfile();
//
//     _navLinks = [
//         new NavLink('/for del', 'Home', 'for del', false),
//         new NavLink('/direct-deposits', 'Direct Deposits', 'account_balance', false),
//         new NavLink('/messages', 'Messages', 'message', false),
//         new NavLink('/profile', 'My Profile', 'person', false),
//         new NavLink('/paychecks', 'Paychecks', 'payment', false),
//         new NavLink('/taxes', 'W-2 Forms', 'folder', false),
//         new NavLink('/hr', 'HR', 'groups', false, false)
//     ];
//
//     constructor(
//         private _authSvc: AuthService,
//         private _router: Router,
//         private _sidenavSvc: SidenavService,
//         private _sessionSvc: SessionService,
//         private _settingsSvc: SettingsService
//         ) { }
//
//     /**
//      * Subscribe to router events for knowing currently
//      * active nav link.
//      */
//     ngOnInit(): void {
//         this._employeeProfile = this._sessionSvc.getCurrentProfile() || new EmployeeProfile();
//         this._router.events.subscribe(this.onRouteChange.bind(this));
//         this._sessionSvc.subscribe(this.onSessionEvents.bind(this));
//         this._version = environment.production ? `${this._version}` : `${this._version} ${environment.name}`;
//         this.isPendingTransactionEnabled$ = this._settingsSvc.isFeatureEnabled('isPendingTransactionEnabled')
//     }
//
//     /**
//      * Callback for session events.
//      * This will also add the HR navigation option
//      * if the user is supposed to be able to view it.
//      *
//      * @param {EmployeeProfile} employeeProfile
//      * @memberof SideNavComponent
//      */
//     onSessionEvents(employeeProfile: EmployeeProfile) {
//         this._employeeProfile = employeeProfile || new EmployeeProfile();
//         if (this._employeeProfile.clientHRAccess) {
//             this._navLinks.forEach(x => {
//                 if (x.label === 'HR') {
//                     x.isVisible = true;
//                 }
//             })
//         }
//     }
//
//     /**
//      * Initialize the sidenav component after the
//      * view is rendered.
//      *
//      * @memberof SideNavComponent
//      */
//     ngAfterViewInit(): void {
//         this._sidenavSvc.init();
//     }
//
//     /**
//      * View callback for navigating to different pages.
//      *
//      * @param {string} route
//      * @memberof SideNavComponent
//      */
//     navigate(route: string) {
//         this._router.navigateByUrl(route);
//     }
//
//     /**
//      * View callback for logging out a user.
//      */
//     logout() {
//         this._authSvc.logout();
//     }
//
//     /**
//      * Callback for route change events that
//      * will set the active tab & hide if necessary.
//      *
//      * @param {RouterEvent} event
//      * @memberof SideNavComponent
//      */
//     onRouteChange(event: RouterEvent) {
//         if (event instanceof NavigationEnd) {
//             for (const x of this._navLinks) {
//                 x.active = event.urlAfterRedirects === x.route;
//             }
//         }
//     }
// }
