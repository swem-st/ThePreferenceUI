import { Component, OnInit } from '@angular/core';
// import { AuthEvents } from 'src/app/models/auth_events';
// import { environment } from 'src/environments/environment';
// import { AuthEventService } from '../../login/authEvent.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // _hideFooter = false;
  // _year = new Date().getFullYear();
  // _privacyPolicyLink = environment.privacyPolicy;
  //
  // constructor(
  //   private _authEventService: AuthEventService,
  //   private _authEvents: AuthEvents
  // ) { }
  //
  //
   ngOnInit() {
  //   this._authEventService.subscribe(this.onAuthEvent.bind(this));
   }
  //
  // /**
  //  * Hides the footer when logging out.
  //  *
  //  * @param authEvent
  //  */
  // onAuthEvent(authEvent: string) {
  //   if (authEvent === this._authEvents.LOGOUT) {
  //     this._hideFooter = true;
  //   }
  // }
}
