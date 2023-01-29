// import { Sidenav, SidenavOptions } from "materialize-css";
// import { Injectable } from "@angular/core";
// import { AuthEventService } from "../../auth/authEvent.service";
// import { AuthEvents } from "../../models/auth_events";
// import { Router, RouterEvent, NavigationEnd } from "@angular/router";
// /**
//  * Sidenav component service that handles state,
//  * toggling, and logic for sidenav operation.
//  *
//  * @export
//  * @class SidenavService
//  */
// @Injectable()
// export class SidenavService {
//
//     private _sidenav: Sidenav;
//
//     /*
//      * The minimum window width the sidenav will be able to close on.
//      */
//     private _minWindowWidth = 1024;
//
//     constructor(
//         private _authEventService: AuthEventService,
//         private _authEvents: AuthEvents,
//         private _router: Router) { }
//
//
//     /**
//      * Initialize the sidenav component.
//      *
//      * @memberof SidenavService
//      */
//     init() {
//         const sidenavOptions = { edge: 'left', draggable: true } as SidenavOptions;
//         const elems = document.querySelector('.sidenav');
//         this._sidenav = Sidenav.init(elems, sidenavOptions);
//         this._authEventService.subscribe(this.onAuthEvents.bind(this));
//         this._router.events.subscribe(this.onRouteChange.bind(this));
//     }
//
//     /**
//      * Callback for auth events that will handle
//      * hiding or showing the sidenav.
//      *
//      * @param {string} authEvent
//      * @memberof SidenavService
//      */
//     onAuthEvents(authEvent: string) {
//         if (this.isLargeWindow() && authEvent === this._authEvents.LOGIN) {
//             this.open();
//             return;
//         }
//
//         this.close(true);
//     }
//
//     /**
//      * Callback for route changes that will close the
//      * sidenav automatically.
//      *
//      * @param {RouterEvent} event
//      * @memberof SidenavService
//      */
//     onRouteChange(event: RouterEvent) {
//         if (event instanceof NavigationEnd) {
//             this.close();
//         }
//     }
//
//     /**
//      * Toggle the sidenav component. If it's current closed,
//      * open it, and vice versa.
//      *
//      * @returns
//      * @memberof SidenavService
//      */
//     toggle() {
//         if (!this._sidenav) return;
//         if (this._sidenav.isOpen) this._sidenav.close();
//         else this._sidenav.open();
//     }
//
//     /**
//      * Close the sidenav component. If the current window width is
//      * >= 1024px this call will be ignored.
//      *
//      * @returns
//      * @memberof SidenavService
//      */
//     close(force?: boolean) {
//         if ((!this._sidenav || this.isLargeWindow()) && !force) return;
//         this._sidenav.close();
//     }
//
//     /**
//      *  Open the sidenav component.
//      *
//      * @returns
//      * @memberof SidenavService
//      */
//     open() {
//         if (!this._sidenav) return;
//         this._sidenav.open();
//     }
//
//     /**
//      * Check current size of window is >= 1024px;
//      *
//      * @returns
//      * @memberof SidenavService
//      */
//     isLargeWindow() {
//         return (this._sidenav as any).lastWindowWidth >= this._minWindowWidth;
//     }
// }
